import styled from 'styled-components';

export const OverallContainer = styled.div`
	width: 100vw;
	padding: 3rem 5%;
	box-sizing: border-box;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		padding: 0rem 5%;
	}
`;
