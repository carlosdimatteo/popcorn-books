import { ReactNode } from 'react';
import { BookCardGridContainer } from './BookCardGrid.styles';

export function BookCardGrid({ children }: { children: ReactNode }) {
	return <BookCardGridContainer>{children}</BookCardGridContainer>;
}
