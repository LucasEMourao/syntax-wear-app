import type { Category } from "./category";

export interface Product {
    id: number
    name: string
    images: string[]
    price: number
    colors: string[]
    slug: string
    categoryId: number
    stock: number
    active: boolean
    description: string
    category: Category
}