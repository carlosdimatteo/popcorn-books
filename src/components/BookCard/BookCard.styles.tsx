import styled from 'styled-components';
import { StarIcon } from '../StarIcon/StarIcon';

export const BookCardContainer = styled.div`
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.standard};
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: white;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	width: 360px;
	height: 360px;
	margin: 12px;
	padding: 20px;
	box-sizing: border-box;
	position: relative;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		width: 280px;
		height: 280px;
	}
`;

export const SaveIcon = styled(StarIcon)`
	width: 42px;
	height: 42px;
	position: absolute;
	position: absolute;
	top: 16px;
	right: 16px;
	&:hover {
		cursor: pointer;
	}
`;

export const PreviewLinkText = styled.a`
	font-size: 1rem;
	color: ${({
		theme: {
			colors: { accent },
		},
	}) => accent};
	justify-self: flex-end;
	line-height: 1.5rem;
`;

export const BookCardImage = styled.img`
	width: 150px;
	height: 150px;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.standard};
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		width: 80px;
		height: 80px;
	}
`;

export const BookCardInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
`;
export const BookCardTitle = styled.span`
	font-weight: 400;
	font-size: 1.5rem;
	line-height: 1.6rem;
	padding-top: 1rem;
	padding-bottom: 0.5rem;
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		font-size: 1.2rem;

		line-height: 1.3rem;
	}
`;

export const BookCardText = styled.span`
	font-size: 1.2rem;
	line-height: 1.25rem;
	margin: 6px;
	color: ${({
		theme: {
			colors: { accent },
		},
	}) => accent};
	@media ${({
			theme: {
				device: { mobile },
			},
		}) => mobile} {
		font-size: 0.8rem;
		max-height: 50%;
		line-height: 1rem;
	}
`;
