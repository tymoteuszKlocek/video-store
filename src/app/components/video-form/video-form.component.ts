import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddNewVideo, Search } from '../../core/store/actions/actions';
import { reducer } from '../../core/store/reducers/reducer';
import { UrlService } from './url.service';
import { Collection } from '../../core/models/collection';
import { Video } from '../../core/models/video';


@Component({
    selector: 'app-video-form',
    templateUrl: './video-form.component.html',
    styleUrls: ['./video-form.component.css']
})

export class VideoFormComponent implements OnChanges {

    addVideoForm: FormGroup;
    private state$: Observable<Collection>;

    constructor(
        private fb: FormBuilder,
        private location: Location,
        private urlService: UrlService,
        private store: Store<Collection>) {
        this.buildForm();
    }

    ngOnChanges() {}

    buildForm() {
        this.addVideoForm = this.fb.group({
            id: '',
            url: ['', Validators.required],
            info: this.fb.group({
                title: '',
                views: 0,
                imgLinks: this.fb.group({
                    thumbnail: '',
                    smallThumbnail: ''
                }),
                date: '',
                author: '',
                favorit: false
            })
        })
    }

    onSubmit() {
        
        let videoId = this.urlService.getVideoIdFromUrl(this.addVideoForm.get('url').value);
        let embedUrl = this.urlService.makeEmbedUrl(this.addVideoForm.get('url').value);

        this.addVideoForm.setValue({
            id: videoId,
            url: embedUrl,
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
        })
        this.store.dispatch(new Search(this.addVideoForm.value));
    }

    goBack() {
        this.location.back();
    }
}
