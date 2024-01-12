import type { Keywords } from "./keywords.model";

export interface Project{
    id: number,
    title: string,
    slug: string,
    short_description: string,
    image: string,
    keywords: Keywords[]
}