import { IconContainer } from './OpenLinkIcon.styles';
import { ReactComponent as OpenLink } from '../../assets/open-link-icon.svg';
export function OpenLinkIcon({
	className,
	title,
	onClick,
}: {
	title?: string;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<IconContainer onClick={onClick} title={title} className={className}>
			<OpenLink />
		</IconContainer>
	);
}
