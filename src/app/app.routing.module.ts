import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    
    { path: 'add-new', component: VideoFormComponent },
    { path: 'list', component: CollectionPageComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
