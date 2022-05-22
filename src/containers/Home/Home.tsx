import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { PageContainer } from '../../components/layout/PageContainer/PageContainer';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useGoogleAPI } from '../../hooks/useAPI';
import { useDebounce } from '../../hooks/useDebounce';

export function Home() {
	const {
		volumes,
		readingList,
		addVolumeToReadingList,
		removeVolumeFromReadingList,
		getVolumes,
	} = useGoogleAPI();
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		getVolumes(debouncedSearch);
	}, [debouncedSearch]);

	return (
		<PageContainer>
			<PageTitle>Your Reading List</PageTitle>
			<br />
			{readingList.map(({ id }, index) => (
				<h1 key={id + index}>READING LIST VOLUME : {id}</h1>
			))}
			<br />
			<Input value={search} onChange={setSearch} />
			<br />
			<PageTitle>Available Books</PageTitle>
			<br />
			{volumes.map(({ title }, index) => (
				<h1 key={index}> VOLUME : {title}</h1>
			))}
			<br />
			<Button
				text="save first volume to storage!"
				onClick={() => {
					console.log('clicked!!');
					!!volumes.length && addVolumeToReadingList(volumes[0]);
				}}
			/>
			<Button
				text="remove first volume to storage!"
				onClick={() => {
					console.log('clicked!!');
					!!volumes.length && removeVolumeFromReadingList(volumes[0]?.id);
				}}
			/>
		</PageContainer>
	);
}
