export interface recipe {
    title: string;
    description: string;
    image: string; // path to image
    type: recipeTypes;
}

export enum recipeTypes {
    SALTY = "Salada",
    SWEET = "Dulce",
    INTERNATIONAL = "Internacional",
    
}