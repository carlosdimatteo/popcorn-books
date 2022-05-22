import { ReactChild } from 'react';
import { StyledHeading } from './Heading.styles';

export function Heading({ children }: { children: ReactChild }) {
	return <StyledHeading>{children}</StyledHeading>;
}
