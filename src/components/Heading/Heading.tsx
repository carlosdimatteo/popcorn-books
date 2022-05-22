import { ReactNode } from 'react';
import { StyledHeading } from './Heading.styles';

export function Heading({ children }: { children: ReactNode }) {
	return <StyledHeading>{children}</StyledHeading>;
}
