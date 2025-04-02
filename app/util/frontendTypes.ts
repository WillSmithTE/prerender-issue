// export function formatLargeNumber(num: number) {
// 	const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc']
// 	// Get the magnitude in powers of 1000 (0 = ones, 1 = thousands, etc.)
// 	const magnitude = Math.floor(Math.log10(num) / 3)

// 	if (magnitude >= suffixes.length) {
// 		// If beyond our suffixes, use scientific notation
// 		return num.toExponential(2)
// 	}

// 	// Scale the number
// 	const scaled = num / Math.pow(1000, magnitude)

// 	// Format with appropriate suffix
// 	return scaled.toFixed(2) + suffixes[magnitude]
// }
export function formatLargeNumber(num: number) {
	return num.toExponential(2)
}
