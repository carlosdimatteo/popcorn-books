import { ChangeEvent } from 'react';
import { StyledInput } from './Input.styles';

export function Input({
	disabled,
	value,
	onChange,
	placeholder,
}: {
	onChange: (text: string) => void;
	disabled?: boolean;
	value: string;
	placeholder?: string;
}) {
	return (
		<StyledInput
			placeholder={placeholder || 'search'}
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) => {
				const text = e.target.value;
				onChange(text);
			}}
			disabled={disabled}
		/>
	);
}
