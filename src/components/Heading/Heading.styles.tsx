import styled from 'styled-components';

export const StyledHeading = styled.h1`
	font-weight: 800;
	font-size: 4.5rem;
	line-height: 1;
	margin: 2rem 1rem;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		font-size: 4rem;
		margin: 2rem 1rem;
	}
`;
