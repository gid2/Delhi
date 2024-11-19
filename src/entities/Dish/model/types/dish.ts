enum DishType {
    Spicy = 'spicy',
    Vegetarian = 'vegetarian',
    Fish = 'fish',
    None = 'none'
}

enum DishSharpness {
    Mild = 'mild',
    Medium = 'medium',
    Hot = 'hot',
    None = 'none'
}

export interface Dish {
    id: string;
    name: string;
    image?: string;
    description?: string;
    compound?: string[];
    possibleAllergens?: string[];
    sharpness?: DishSharpness;
    discount?: number;
    tags?: string;
    weight?: number;
    price?: number;
    choiceOfSpiciness?: DishSharpness[];
    additions?: string[];
}
