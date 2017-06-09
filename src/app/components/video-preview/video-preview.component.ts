import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { DialogPlayerService } from '../dialog-player/dialog-player.service';
import { Video } from '../../core/models/video';
import { Collection } from '../../core/models/collection';
import { DeleteVideo } from '../../core/store/actions/actions';

@Component({
    selector: 'app-video-preview',
    templateUrl: './video-preview.component.html',
    styleUrls: ['./video-preview.component.css']
})

export class VideoPreviewComponent implements OnInit {

    @Input() video: Video;
    
    constructor(
        public dialogPlayerService: DialogPlayerService,
        public store: Store<Collection>
    ) { }

    result: any;

    ngOnInit() {

    }

    deleteVideo(video) {
        this.store.dispatch(new DeleteVideo(video));
    }
}
