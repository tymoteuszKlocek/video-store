﻿import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'videoUrl'
})
export class VideoUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
