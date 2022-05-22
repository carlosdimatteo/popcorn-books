import { ReactChild } from 'react';
import { StyledSpan } from './PageTitle.styles';

export function PageTitle({ children }: { children: ReactChild }) {
	return <StyledSpan>{children}</StyledSpan>;
}
