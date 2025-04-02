import { AppLoadContext } from 'react-router';

export type BackendConfig = ReturnType<typeof buildConfig>

export function contextToBackendConfig(context: AppLoadContext): BackendConfig {
	return buildConfig(context.cloudflare.env)
}
function buildConfig(varStore: Record<string, any>) {
	return {
		anthropicKey: getOrThrow('ANTHROPIC_KEY', varStore),
		partyKitHost: getOrThrow('PARTYKIT_HOST', varStore),
	}
}

function getOrThrow(key: string, varStore: Record<string, any>) {
	const value = varStore[key]
	if (!value) throw new Error(`${key} is not defined`)
	return value
}
