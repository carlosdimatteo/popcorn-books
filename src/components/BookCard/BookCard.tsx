import { Volume } from '../../types';
import { clipText } from '../../utils/clipText';
import {
	BookCardContainer,
	BookCardImage,
	BookCardInfoContainer,
	BookCardText,
	BookCardTitle,
	SaveIcon,
} from './BookCard.styles';

export function BookCard({
	title,
	id,
	previewLink,
	thumbnail,
	smallThumbnail,
	publisher,
	authors,
	onIconClick,
	saved,
}: Volume & {
	onIconClick?: () => void;
	saved?: boolean;
}) {
	function cleanAuthors(authors: string[], len: number = 40) {
		return authors?.map((author) => clipText(author, len)).join(', ');
	}
	return (
		<BookCardContainer>
			<SaveIcon
				onClick={onIconClick}
				title={saved ? 'Remove from reading list' : 'Add to reading list'}
				filled={saved}
			/>
			<BookCardImage src={thumbnail || smallThumbnail} />
			<BookCardTitle>{clipText(title, 46)}</BookCardTitle>
			<BookCardInfoContainer>
				<BookCardText>
					Author{authors?.length > 1 ? 's' : ''}:{' '}
					{authors && authors?.length > 4
						? `${cleanAuthors(authors.slice(0, 3), 8)} and ${
								authors?.length - 3
						  } more`
						: cleanAuthors(authors)}
					{!authors && 'No author'}
				</BookCardText>
				<BookCardText>Publisher: {publisher || 'Not Published'}</BookCardText>
			</BookCardInfoContainer>
		</BookCardContainer>
	);
}
