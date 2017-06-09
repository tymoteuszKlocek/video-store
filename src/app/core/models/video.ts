export interface Video {
    id: string;
    url: string;
    info: {
        title: string,
        views?: number,
        imgLinks: {
            thumbnail: string,
            smallThumbnail?: string
        },
        date?: string,
        author?: string,
        favorit?: boolean
    }
}

