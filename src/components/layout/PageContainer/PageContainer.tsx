import { ReactChild } from 'react';
import { OverallContainer } from './PageContainer.styles';

export function PageContainer({ children }: { children: ReactChild }) {
	return <OverallContainer>{children}</OverallContainer>;
}
