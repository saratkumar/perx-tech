export interface GRID_HEADER {
    id: number;
    name: string;
    source: string;
    type?: string;
}

export interface GRID_RESPONSE {
    id: string;
    name: string;
    type: string;
    created_at: string;
}