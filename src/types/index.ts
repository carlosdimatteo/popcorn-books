/**Google  Books API types */

export interface VolumeListFromApi {
	kind: string;
	totalItems: number;
	items?: VolumeFromAPI[] | null;
}
export interface VolumeFromAPI {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: VolumeInfo;
	saleInfo: SaleInfo;
	accessInfo: AccessInfo;
	searchInfo: SearchInfo;
}
export interface VolumeInfo {
	title: string;
	subtitle?: string | null;
	authors?: string[] | null;
	publisher?: string | null;
	publishedDate: string;
	description?: string | null;
	readingModes: ReadingModes;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	imageLinks: ImageLinks;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	panelizationSummary?: PanelizationSummary | null;
}
export interface ReadingModes {
	text: boolean;
	image: boolean;
}
export interface ImageLinks {
	smallThumbnail: string;
	thumbnail: string;
}
export interface PanelizationSummary {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}
export interface SaleInfo {
	country: string;
	listPrice?: ListPriceOrRetailPrice | null;
	retailPrice?: ListPriceOrRetailPrice1 | null;
	buyLink?: string | null;
	offers?: OffersEntity[] | null;
}
export interface ListPriceOrRetailPrice {
	amount: number;
	currencyCode: string;
}
export interface ListPriceOrRetailPrice1 {
	amount: number;
	currencyCode: string;
}
export interface OffersEntity {
	finskyOfferType: number;
	listPrice: ListPriceOrRetailPrice2;
	retailPrice: ListPriceOrRetailPrice2;
}
export interface ListPriceOrRetailPrice2 {
	amountInMicros: number;
	currencyCode: string;
}
export interface AccessInfo {
	country: string;
	epub: EpubOrPdf;
	pdf: EpubOrPdf;
	accessViewStatus: string;
}
export interface EpubOrPdf {
	isAvailable: boolean;
	acsTokenLink?: string | null;
	downloadLink?: string | null;
}
export interface SearchInfo {
	textSnippet: string;
}

/** App types */

export type Volume = {
	kind: string;
	id: string;
	etag: string;
	title: string;
	subtitle?: string | null;
	authors?: string[] | null;
	publisher?: string | null;
	publishedDate: string;
	description?: string | null;
	readingModes: ReadingModes;
	maturityRating: string;
	imageLinks: ImageLinks;
	previewLink: string;
	infoLink: string;
};

/**component or app data types */

export type ButtonType = {
	disabled?: boolean;
	text: string;
	color?: string;
	onClick: () => void;
};
