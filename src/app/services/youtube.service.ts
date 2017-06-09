import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Video } from '../core/models/video';

@Injectable()
export class YoutubeService {

    private API_PATH = 'https://www.googleapis.com/youtube/v3/videos?id=';
    private API_KEY = 'AIzaSyCeZ_ijxCc_QKVvugAW_y86j6w5ImALaos';
    private KEYWORD = '&key=';
    private API_FILTER = '&part=snippet,statistics';
    
    constructor(private http: Http) { }

    retriveVideo(videoId: string): Observable<any> {
        return this.http.get(this.API_PATH + videoId + this.KEYWORD + this.API_KEY + this.API_FILTER)
            .map(res => this.prepareData(res.json()))
    }

    prepareData(response) {
        console.log(response);
        let videoObj: Video;
        videoObj = {
            id: response.items["0"].id,
            url: '',
            info: {
                title: response.items["0"].snippet.title,
                views: response.items["0"].statistics.viewCount,
                imgLinks: {
                    thumbnail: response.items["0"].snippet.thumbnails.medium.url,
                    smallThumbnail: response.items["0"].snippet.thumbnails.default.url,
                },
                date: response.items["0"].snippet.publishedAt,
                author: response.items["0"].snippet.channelTitle,
                favorit: false
            }
        }
        return videoObj;
    }

}
