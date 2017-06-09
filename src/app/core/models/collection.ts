import { Video } from './video';

export interface Collection {
    videos: Array<Video>,
    selectedVideo: Video
}