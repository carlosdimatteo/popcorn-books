import styled from 'styled-components';

export const StyledInput = styled.input`
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
	padding: 1rem;
	background: white;
	font-size: 1rem;
	line-height: 1.5rem;
	border: none;
	box-sizing: border-box;
	&:active {
		border: none;
	}
	margin-bottom: 6px;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
