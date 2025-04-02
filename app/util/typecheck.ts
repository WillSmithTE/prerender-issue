export function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
	return value === null || value === undefined
}
export function isNotNullOrUndefined<T>(value: T | null | undefined): value is T {
	return !isNullOrUndefined(value)
}
export function isUndefined<T>(value: T | undefined): value is undefined {
	return value === undefined
}
export function isDefined<T>(value: T | undefined): value is T {
	return !isUndefined(value)
}

export function isEmpty(value: string | null | undefined | Array<any>): boolean {
	return value === '' || isNullOrUndefined(value) || (Array.isArray(value) && value.length === 0)
}

export function assertNever(x: never): never {
	throw new Error('Unexpected object: ' + x)
}
