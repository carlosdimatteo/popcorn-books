import { IconContainer } from './StarIcon.styles';
import { ReactComponent as FilledStar } from '../../assets/filled-star.svg';
import { ReactComponent as EmptyStar } from '../../assets/empty-star.svg';
export function StarIcon({
	filled,
	className,
	title,
	onClick,
}: {
	filled: boolean;
	title?: string;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<IconContainer onClick={onClick} title={title} className={className}>
			{filled ? <FilledStar /> : <EmptyStar />}
		</IconContainer>
	);
}
