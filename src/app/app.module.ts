import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import 'hammerJS';

import { UrlService } from './components/video-form/url.service';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { PipesModule } from './pipes/pipes.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DialogPlayerModule } from './components/dialog-player/dialog-player.module';
import { reducer } from './core/store/reducers/reducer';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { effects } from './core/store/effects/effects';
import { YoutubeService } from './services/youtube.service';

@NgModule({
    declarations: [
        AppComponent,
        VideoListComponent,
        VideoFormComponent,
        PageNotFoundComponent,
        VideoPreviewComponent,
        CollectionPageComponent,
    ],
    imports: [
        EffectsModule.run(effects),
        StoreModule.provideStore({ reducer }),
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpModule,
        MaterialModule,
        DialogPlayerModule,
        PipesModule,
        MdIconModule,
        AppRoutingModule
        
    ],
    providers: [UrlService, YoutubeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
