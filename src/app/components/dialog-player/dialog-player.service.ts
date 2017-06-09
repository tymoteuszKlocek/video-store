import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { DialogPlayerComponent } from './dialog-player.component';

@Injectable()
export class DialogPlayerService {

    constructor(private dialog: MdDialog) { }

    public confirm(url: string): Observable<boolean> {

        let dialogRef: MdDialogRef<DialogPlayerComponent>;

        dialogRef = this.dialog.open(DialogPlayerComponent);
        dialogRef.componentInstance.url = url;
        return dialogRef.afterClosed();
    }

}
