import { publicClient } from '$lib/client';
import type { Address, Hex } from 'viem';
import { type Codec, decode, getCodec } from '@ensdomains/content-hash';
import { namehash, normalize } from 'viem/ens';

const contenthashToUrl = (codec: Codec, content: string): string => {
	switch (codec) {
		case 'ipfs':
			return `https://ipfs.io/ipfs/${content}`;
		case 'swarm':
			return `https://swarm-gateways.net/bzz/${content}`;
		default:
			throw new Error(`Unsupported codec: ${codec}`);
	}
};

const getContenthashUrl = async (resolver: Address, node: Hex): Promise<string | null> => {
	try {
		const contenthash = await publicClient.readContract({
			address: resolver,
			functionName: 'contenthash',
			args: [node],
			abi: [{
				'inputs': [{ 'internalType': 'bytes32', 'name': 'node', 'type': 'bytes32' }],
				'name': 'contenthash',
				'outputs': [{ 'internalType': 'bytes', 'name': '', 'type': 'bytes' }],
				'stateMutability': 'view',
				'type': 'function'
			}]
		});

		const content = decode(contenthash);
		const codec = getCodec(contenthash);

		if (!codec) return null;

		const url = contenthashToUrl(codec, content);

		return url;
	} catch {
		// either the resolver doesn't have a contenthash or the contenthash is invalid
		return null;
	}
};

const getTextUrl = async (query: string): Promise<string | null> => {
	return await publicClient.getEnsText({
		name: normalize(query),
		key: 'url'
	});
};

export const getEnsUrl = async (query: string): Promise<string | null> => {
	const resolver = await publicClient.getEnsResolver({
		name: normalize(query)
	});

	const node = namehash(query);

	const contenthashUrl = await getContenthashUrl(resolver, node);

	if (contenthashUrl) {
		return contenthashUrl;
	}

	const ensUrl = await getTextUrl(query);

	if (ensUrl) {
		return ensUrl;
	}

	return null;
};
