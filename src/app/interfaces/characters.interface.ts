export interface Characters {
    id: number;
    name : string;
    status : string;
    species : string;
    gender : string;
    origin : {name: string};
    image : string;
}   

export interface RickAndMortyResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Characters[];
}
