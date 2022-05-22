import { ReactNode } from 'react';
import { OverallContainer } from './PageContainer.styles';

export function PageContainer({ children }: { children: ReactNode }) {
	return <OverallContainer>{children}</OverallContainer>;
}
