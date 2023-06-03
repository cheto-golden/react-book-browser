export interface BookCardProp {
    id: string;
    title: string;
    authors: number;
    thumbnail: string;
    onClick?: () => void;
}
