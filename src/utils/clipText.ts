export function clipText(text: string, len: number = 34) {
	return text.length > len ? `${text.substring(0, len - 3)}...` : text;
}
