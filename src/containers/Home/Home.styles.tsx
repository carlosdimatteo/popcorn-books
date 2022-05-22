import styled from 'styled-components';

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 2rem;
	flex-direction: column;
`;

export const TinyText = styled.span`
	font-size: 0.8rem;
	align-self: flex-end;
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
`;
