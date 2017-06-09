import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import { DialogPlayerService } from '../dialog-player/dialog-player.service';
import { Video } from '../../core/models/video';
import { Collection } from '../../core/models/collection';
import { reducer } from '../../core/store/reducers/reducer';
import { DeleteVideo, RemoveAllVideos } from '../../core/store/actions/actions';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {

    videos: Video[];
    video: Video;
    state$: Observable<Collection>;
    result: any;
    list: boolean = true;

    constructor(
        public dialogPlayerService: DialogPlayerService,
        public store: Store<Collection>,
        iconRegistry: MdIconRegistry,
        sanitizer: DomSanitizer
    ) {

        //TODO icons
        //iconRegistry.addSvgIcon(
        //    'grid',
        //    sanitizer.bypassSecurityTrustResourceUrl('assets/gird-icon.svg'));

        //iconRegistry.addSvgIcon(
        //    'list',
        //    sanitizer.bypassSecurityTrustResourceUrl('assets/list-icon.svg'));
    }

    ngOnInit() {
        this.state$ = this.store.select('reducer');
        this.state$.subscribe(v => this.videos = v.videos);
    }

    deleteVideo(video) {
        console.log(video);
        this.store.dispatch(new DeleteVideo(video));
    }

    removeAllVideos() {
        alert('You will delete all videos. Are you sure?');
        alert("Please, don't!");
        this.store.dispatch(new RemoveAllVideos());
    }

    openDialog(url) {
        this.dialogPlayerService
            .confirm(url)
            .subscribe(res => this.result = res);
    }

    ngDoCheck() {
        this.state$ = this.store.select('reducer');
        this.state$.subscribe(v => this.videos = v.videos);
    }
}

