import styled from 'styled-components';

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 2rem 0;
	flex-direction: column;
`;

export const TinyText = styled.span`
	font-size: 0.8rem;
	align-self: flex-end;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		margin: 0rem 1rem;
	}
`;

export const EmptyStateText = styled.span`
	text-align: center;
	font-size: 1rem;
`;

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 50%;
	margin: auto;
	flex-direction: column;
	text-align: center;
	align-items: center;
`;

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		flex-wrap: wrap;
	}
`;
