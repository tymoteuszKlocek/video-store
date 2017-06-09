import { Action } from '@ngrx/store';
import { Video } from '../../models/video';

export const CREATE_NEW_VIDEO = 'CREATE_NEW_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const REMOVE_ALL_VIDEOS = 'REMOVE_ALL_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const ADD_NEW_VIDEO = 'ADD_NEW_VIDEO';
export const SEARCH = 'SEARCH';


export class CreateNewVideo implements Action {
    readonly type = CREATE_NEW_VIDEO;

    constructor() { };
}

export class AddNewVideo implements Action {
    readonly type = ADD_NEW_VIDEO;

    constructor(public payload: Video) { };
}

export class DeleteVideo implements Action {
    readonly type = DELETE_VIDEO;

    constructor(public payload) { };
}

export class RemoveAllVideos implements Action {
    readonly type = REMOVE_ALL_VIDEOS;

    constructor() { };
}

export class SelectVideo implements Action {
    readonly type = SELECT_VIDEO;

    constructor(public payload) { };
}

export class Search implements Action {
    readonly type = SEARCH;

    constructor(public payload) { };
}

export type Actions
    = CreateNewVideo
    | AddNewVideo
    | DeleteVideo
    | RemoveAllVideos
    | SelectVideo
    | Search;
