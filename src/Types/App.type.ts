export interface AppType {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: string;
    downloads: string;
    ratings: {
        name: string;
        count: number;
    }[];
}