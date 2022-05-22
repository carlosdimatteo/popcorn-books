import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { PageContainer } from '../../components/layout/PageContainer/PageContainer';
import { useGoogleAPI } from '../../hooks/useAPI';

export function Home() {
	const {
		volumes,
		readingList,
		addVolumeToReadingList,
		removeVolumeFromReadingList,
		getVolumes,
	} = useGoogleAPI();
	useEffect(() => {
		getVolumes();
	}, []);
	return (
		<PageContainer>
			reading list
			<br />
			{readingList.map(({ id }, index) => (
				<h1 key={id + index}>READING LIST VOLUME : {id}</h1>
			))}
			<br />
			volumes from api
			<br />
			{volumes.map(({ id }) => (
				<h1 key={id}> VOLUME : {id}</h1>
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
				text="save first volume to storage!"
				onClick={() => {
					console.log('clicked!!');
					!!volumes.length && removeVolumeFromReadingList(volumes[0]?.id);
				}}
			/>
		</PageContainer>
	);
}
