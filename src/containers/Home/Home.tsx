import { useEffect, useState } from 'react';
import { BookCard } from '../../components/BookCard/BookCard';
import { BookCardGrid } from '../../components/BookCardGrid/BookCardGrid';
import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';
import { PageContainer } from '../../components/layout/PageContainer/PageContainer';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useGoogleAPI } from '../../hooks/useAPI';
import { useDebounce } from '../../hooks/useDebounce';
import { Volume } from '../../types';
import {
	ContentContainer,
	EmptyStateText,
	HeaderContainer,
	LoaderContainer,
} from './Home.styles';
import PopcornLogo from '../../assets/popcorn-logo.png';
import loader from '../../assets/search-loader.gif';
export function Home() {
	const {
		volumes,
		readingList,
		addVolumeToReadingList,
		removeVolumeFromReadingList,
		clearStorage,
		getVolumes,
		clearState,
		loading,
	} = useGoogleAPI();
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		if (debouncedSearch) {
			getVolumes(debouncedSearch);
		} else {
			clearState();
		}
	}, [debouncedSearch]);

	function checkIsSaved(id: string) {
		const existingVolume = readingList.find((vol) => id === vol.id);
		return !!existingVolume;
	}

	function handleIconClick(isSaved: boolean, volume: Volume) {
		console.log({ volume, isSaved });
		if (isSaved) {
			removeVolumeFromReadingList(volume.id);
		} else {
			addVolumeToReadingList(volume);
		}
	}

	return (
		<PageContainer>
			<HeaderContainer>
				<img src={PopcornLogo} alt="logo" width="120px" />
				<Heading>Popcorn Book Searcher</Heading>
			</HeaderContainer>
			<ContentContainer>
				<Input
					placeholder="Search books by title"
					value={search}
					onChange={setSearch}
				/>
				{!volumes?.length && !loading && !debouncedSearch && (
					<EmptyStateText>
						Type something in the search box to start!
					</EmptyStateText>
				)}
				{loading && !!debouncedSearch && (
					<LoaderContainer>
						{' '}
						<img alt="loader" src={loader} width="120px" />
						searching...
					</LoaderContainer>
				)}
				{!volumes?.length && !loading && !!debouncedSearch && (
					<EmptyStateText>No books found, try another keyword</EmptyStateText>
				)}
				<HeaderContainer>
					{!!volumes?.length && !loading && <PageTitle>Found Books</PageTitle>}
				</HeaderContainer>
				<BookCardGrid>
					{volumes?.map((volume) => (
						<BookCard
							{...volume}
							onIconClick={() => {
								handleIconClick(checkIsSaved(volume.id), volume);
							}}
							saved={checkIsSaved(volume.id)}
						/>
					))}
				</BookCardGrid>
			</ContentContainer>

			<HeaderContainer>
				<PageTitle>Your Reading List</PageTitle>
				{!!readingList?.length && (
					<Button
						text="Clear storage!"
						onClick={() => {
							!!readingList.length && clearStorage();
						}}
					/>
				)}
			</HeaderContainer>

			<BookCardGrid>
				{readingList.map((volume) => (
					<BookCard
						onIconClick={() => {
							handleIconClick(checkIsSaved(volume.id), volume);
						}}
						{...volume}
						saved={checkIsSaved(volume.id)}
					/>
				))}
			</BookCardGrid>
		</PageContainer>
	);
}
