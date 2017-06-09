import { DialogPlayerService } from './dialog-player.service';
//import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { DialogPlayerComponent } from './dialog-player.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    imports: [
        PipesModule
    ],
    exports: [
        DialogPlayerComponent,
    ],
    declarations: [
        DialogPlayerComponent
    ],
    providers: [
        DialogPlayerService,
    ],
    entryComponents: [
        DialogPlayerComponent,
    ],
})
export class DialogPlayerModule { }