import styled from 'styled-components';
import { ButtonType } from '../../types';

export const StyledButton = styled.button<{
	disabled?: boolean;
	color?: string;
}>`
	background: ${({ theme: { colors }, color }) =>
		color ? colors[color] || color : colors.primary};
	padding: 1rem;
	color: white;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.standard};
	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	}
	border: none;
	text-transform: capitalize;
	font-size: 1rem;
	font-weight: 500;
`;
