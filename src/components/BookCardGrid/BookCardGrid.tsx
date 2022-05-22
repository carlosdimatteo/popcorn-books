import { ReactChild } from 'react';
import { BookCardGridContainer } from './BookCardGrid.styles';

export function BookCardGrid({ children }: { children: ReactChild }) {
	return <BookCardGridContainer>{children}</BookCardGridContainer>;
}
