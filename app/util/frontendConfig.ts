export type FrontendConfig = {
	GA_ID: string
	PARTYKIT_HOST: string
	ENV: string
}
export function buildFrontendConfig(varStore: Record<string, any>): FrontendConfig {
	return {
		GA_ID: getOrThrow('GA_ID', varStore),
		PARTYKIT_HOST: getOrThrow('PARTYKIT_HOST', varStore),
		ENV: getOrThrow('ENV', varStore),
	}
}

function getOrThrow(key: string, varStore: Record<string, string>) {
	const value = get(key, varStore)
	if (!value) throw new Error(`${key} is not defined`)
	return value
}

function get(key: string, varStore: Record<string, string | undefined>) {
	const value = varStore[key]
	return value
}

function isTrue(value: string | undefined | boolean) {
	return value === 'true' || value === true
}
