import styled from 'styled-components';

export const StyledSpan = styled.span`
	font-weight: 700;
	font-size: 3rem;
	line-height: 1;
	margin: 1rem;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		font-size: 2rem;
		line-height: 2.2rem;
	}
`;
