import styled from 'styled-components';

export const IconContainer = styled.div<{ fillColor?: string }>`
	&:hover {
		.icon-path {
			fill: ${({ theme: { colors }, fillColor }) =>
				fillColor ? colors[fillColor] || fillColor : `${colors.primary}aa`};
		}
	}
	.icon-path {
		fill: ${({ theme: { colors }, fillColor }) =>
			fillColor ? colors[fillColor] || fillColor : colors.primary};
	}
`;
