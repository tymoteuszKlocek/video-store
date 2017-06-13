import { Action, ActionReducer } from '@ngrx/store';

import * as video from '../actions/actions';
import { Video } from '../../models/video';
import { Collection } from '../../models/collection';

const emptyState = { "videos": [], "selectedVideo": { "id": "", "url": "", "info": { "title": "", "views": 0, "imgLinks": { "thumbnail": "", "smallThumbnail": "" }, "date": "", "author": "", "favorit": false } } }
const adjustStorageContent = (value): any => {

    if (value === null) {
        return emptyState;
    }
    else {
        return value;
    }

}
const setToLocalStorage = (val) => {
    let string = JSON.stringify(val)
    localStorage.setItem("video-store-state", string);
}

const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("video-store-state"));
}

export const localStorageState = adjustStorageContent(getFromLocalStorage());

export const sampleState = {
    videos: [
        {
            id: 'EL0pTo9Z_XU',
            url: 'https://www.youtube.com/embed/EL0pTo9Z_XU',
            info: {
                title: 'Video1',
                views: 100000,
                imgLinks: {
                    thumbnail: "https://i.ytimg.com/vi/EL0pTo9Z_XU/mqdefault.jpg",
                    smallThumbnail: "https://i.ytimg.com/vi/EL0pTo9Z_XU/default.jpg",
                },
                date: "2010-11-22T17:31:56.000Z",
                author: "Jamie Woon",
                favorit: true
            }
        }
    ],
    selectedVideo: {
        id: '',
        url: '',
        info: {
            title: '',
            views: 0,
            imgLinks: {
                thumbnail: '',
                smallThumbnail: ''
            },
            date: '',
            author: '',
            favorit: false
        }
    }
};

export const initialState = (localStorageState === emptyState) ? sampleState : localStorageState;

export const reducer: ActionReducer<Collection> = (state = initialState, action: video.Actions): Collection => {
    switch (action.type) {
        case video.CREATE_NEW_VIDEO: {
            state.selectedVideo = ({
                id: '',
                url: '',
                info: {
                    title: '',
                    views: 0,
                    imgLinks: {
                        thumbnail: '',
                        smallThumbnail: ''
                    },
                    date: '',
                    author: '',
                    favorit: true
                }
            });
            setToLocalStorage(state);
            return state;
        }
        case video.ADD_NEW_VIDEO: {
            let newObj: Video = action.payload;
            let newState: Video[] = [];
            state.videos.forEach(obj => {
                if (obj.id !== newObj.id) {
                    newState.push(obj);
                }
            });
            newState.push(newObj);
            state.videos = newState;
            setToLocalStorage(state);
            return state;
        }
        case video.SEARCH: {
            return state;
        }
        case video.DELETE_VIDEO: {
            let newState = [];
            state.videos.map(obj => {
                if (obj.id !== action.payload.id) {
                    newState.push(obj);
                }
            });
            state.videos = newState;
            setToLocalStorage(state);
            return state;
        }
        case video.REMOVE_ALL_VIDEOS: {
            state.videos = [];
            state.selectedVideo = {
                id: '',
                url: '',
                info: {
                    title: '',
                    views: 0,
                    imgLinks: {
                        thumbnail: '',
                        smallThumbnail: ''
                    },
                    date: '',
                    author: '',
                    favorit: false
                }
            }
            setToLocalStorage(state);
            return state;
        }
        case video.SELECT_VIDEO: {
            state.selectedVideo = action.payload;
            return state;
        }
        default: {
            setToLocalStorage(state);
            return state;
        }
    }
}

