import { GRID_HEADER } from "src/app/models/grid.interface";

export const GRIDHEADER: GRID_HEADER[] = [
    {
        id: 1,
        name: "Name",
        source: "name"
    },
    {
        id: 2,
        name: "Type",
        source: "type"
    },
    {
        id: 3,
        name: "Created",
        source: "created_at",
        type: "date"
    }
]