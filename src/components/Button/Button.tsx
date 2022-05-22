import { ButtonType } from '../../types';
import { StyledButton } from './Button.styles';

export function Button({ disabled, text, color, onClick }: ButtonType) {
	return (
		<StyledButton onClick={onClick} color={color} disabled={disabled}>
			{text}
		</StyledButton>
	);
}
