import { useEffect, useState } from 'react';
import { BookCard } from '../../components/BookCard/BookCard';
import { BookCardGrid } from '../../components/BookCardGrid/BookCardGrid';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { PageContainer } from '../../components/layout/PageContainer/PageContainer';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useGoogleAPI } from '../../hooks/useAPI';
import { useDebounce } from '../../hooks/useDebounce';
import { Volume } from '../../types';

export function Home() {
	const {
		volumes,
		readingList,
		addVolumeToReadingList,
		removeVolumeFromReadingList,
		clearStorage,
		getVolumes,
	} = useGoogleAPI();
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		getVolumes(debouncedSearch);
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
			<PageTitle>Popcorn Book Searcher</PageTitle>
			<br />
			<Input
				placeholder="Search books by title"
				value={search}
				onChange={setSearch}
			/>
			<br />
			<PageTitle>Found Books</PageTitle>

			<BookCardGrid>
				{volumes.map((volume) => (
					<BookCard
						{...volume}
						onIconClick={() => {
							handleIconClick(checkIsSaved(volume.id), volume);
						}}
						saved={checkIsSaved(volume.id)}
					/>
				))}
			</BookCardGrid>

			<PageTitle>Your Reading List</PageTitle>
			<Button
				text="Clear storage!"
				onClick={() => {
					console.log('clicked!!');
					!!readingList.length && clearStorage();
				}}
			/>

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
