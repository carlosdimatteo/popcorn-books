import { ReactNode } from 'react';
import { StyledSpan } from './PageTitle.styles';

export function PageTitle({ children }: { children: ReactNode }) {
	return <StyledSpan>{children}</StyledSpan>;
}
