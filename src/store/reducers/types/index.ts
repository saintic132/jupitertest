export type CategoryType = 'All' | 'Design' | 'Branding' | 'Illustration' | 'Motion'
export type ProjectType = {
    id: number
    category: CategoryType
    title: string
    image: string
}
export type initialProjectsStateType = {
    projects: ProjectType[]
    activeCategory: CategoryType
}