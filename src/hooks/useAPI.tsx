import axios from 'axios';
import { createContext, ReactElement, useContext, useState } from 'react';
import { Volume, VolumeFromAPI, VolumeListFromApi } from '../types';
const GOOGLE_API_URL = 'https://www.googleapis.com/books/v1/volumes';
function useGoogleAPIState() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [response, setResponse] = useState<any>(null);
	const [volumeCount, setVolumeCount] = useState<number>(0);
	const [volumes, setVolumes] = useState<Volume[]>([]);
	const [readingList, setReadingList] = useState<Volume[]>(getListFromStorage);
	function clearState() {
		setError(null);
		setResponse(null);
		setLoading(null);
	}

	function mapVolumeFromApi(volumeFromApi: VolumeFromAPI): Volume {
		const {
			kind,
			id,
			etag,
			volumeInfo: {
				title,
				subtitle,
				authors,
				publisher,
				publishedDate,
				description,
				readingModes,
				maturityRating,
				imageLinks,
				previewLink,
				infoLink,
			},
		} = volumeFromApi;
		return {
			kind,
			id,
			etag,
			title,
			subtitle,
			authors,
			publisher,
			publishedDate,
			description,
			readingModes,
			maturityRating,
			imageLinks,
			previewLink,
			infoLink,
		};
	}

	async function getVolumes(searchQuery: string = 'popcorn') {
		try {
			const {
				data: { totalItems, items },
			} = await axios.get<VolumeListFromApi>(
				`${GOOGLE_API_URL}?q=${searchQuery}&projection=lite&printType=books&maxResults=5`,
			);
			setVolumeCount(totalItems);
			const volumes = items.map((volume) => mapVolumeFromApi(volume));
			setVolumes(volumes);
			return volumes;
		} catch (e) {
			setError(e);
		}
	}

	function getListFromStorage() {
		const readingList = JSON.parse(localStorage.getItem('readingList') || '[]');
		return readingList as Volume[];
	}

	function updateStorageList(newReadingList: Volume[]) {
		localStorage.setItem('readingList', JSON.stringify(newReadingList));
		setReadingList(newReadingList);
	}

	function getReadingList() {
		const readingList = getListFromStorage();
		setReadingList(readingList);
		return readingList;
	}

	function addVolumeToReadingList(volume: Volume) {
		const newList = [...readingList, volume];
		updateStorageList(newList);
	}

	function removeVolumeFromReadingList(id: string) {
		const readingList = getListFromStorage();
		const filter = readingList.filter(({ id: volumeId }) => id !== volumeId);
		updateStorageList(filter);
	}

	return {
		loading,
		error,
		response,
		volumes,
		readingList,
		volumeCount,
		clearState,
		getVolumes,
		getReadingList,
		removeVolumeFromReadingList,
		addVolumeToReadingList,
	};
}

export const GoogleAPIContext: React.Context<{
	error: any;
	loading: boolean;
	response: any;
	volumeCount: number;
	volumes: Volume[];
	readingList: Volume[];
	getReadingList: () => Volume[];
	getVolumes: (search?: string) => Promise<Volume[]>;
	addVolumeToReadingList: (volume: Volume) => void;
	removeVolumeFromReadingList: (id: string) => void;
	clearState: () => void;
}> = createContext({} as any);

export function GoogleAPIProvider({ children }: { children?: ReactElement }) {
	const api = useGoogleAPIState();
	return (
		<GoogleAPIContext.Provider value={api}>
			{children}
		</GoogleAPIContext.Provider>
	);
}

export function useGoogleAPI() {
	return useContext(GoogleAPIContext);
}
