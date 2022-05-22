import styled from 'styled-components';

export const BookCardGridContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		justify-content: center;
	}
`;
