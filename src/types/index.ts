export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  images: string[];
  benefits: string[];
  ingredients: string[];
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}