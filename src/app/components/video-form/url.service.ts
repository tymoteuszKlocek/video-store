import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

    embedUrl: string;
    constructor() { }

    getVideoIdFromUrl(url: string): string {
        let list = 'list=';
        //TODO
        return url.slice(url.length - 11, url.length); 
    }

    makeEmbedUrl(url): string {
        let watch = 'watch?v=';
        let short = 'youtu.be/';
        let list = 'list=';
        let embed = 'https://www.youtube.com/embed/';
        let videoIDlength = 11;
        let error = 'error';

        if (url.indexOf(watch) !== -1 || url.indexOf(short) !== -1) {
            this.embedUrl = embed + url.slice(url.length - 11, url.length);
            return this.embedUrl;
        } else if (url.length === videoIDlength) {
            this.embedUrl = embed + url;
            return this.embedUrl;
        } else if (url.indexOf(embed) !== -1) {
            this.embedUrl = url;
            return this.embedUrl;
        } else if (url.indexOf(list) !== -1) {
            this.embedUrl = url;
            return this.embedUrl;
        } else {
            return error;
        }
    }
}
