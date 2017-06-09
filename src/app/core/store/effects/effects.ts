import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { YoutubeService } from '../../../services/youtube.service';
import * as collection from '../actions/actions';
import { Collection } from '../../models/collection';

@Injectable()
export class effects {
    constructor(private action$: Actions,
        private youtubeService: YoutubeService,
        private store: Store<Collection>) { }

    @Effect() search$ = this.action$
        .ofType(collection.SEARCH)
        .map(toPayload)
        .switchMap(payload => {
            console.log('effect payload', payload);
            return this.youtubeService.retriveVideo(payload.id)
                .map(videoObject => {
                    if (videoObject) {
                        videoObject.url = payload.url;
                        this.store.dispatch(new collection.AddNewVideo(videoObject));
                    }
                    return videoObject;
                    //TODO 
                    //Observable.of({})
                })
        })
}