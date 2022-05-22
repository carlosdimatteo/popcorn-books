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
	width: 300px;
	height: 300px;
	margin: 12px;
	padding: 40px;
	position: relative;
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

export const BookCardImage = styled.img`
	width: 150px;
	height: 150px;

	border-radius: ${({ theme: { borderRadius } }) => borderRadius.standard};
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
`;
