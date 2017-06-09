import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
    selector: 'app-dialog-player',
    templateUrl: './dialog-player.component.html',
    styleUrls: ['./dialog-player.component.css']
})
export class DialogPlayerComponent implements OnInit {

    public url: string;

    constructor(public dialog: MdDialogRef<DialogPlayerComponent>) { }

    ngOnInit() {
    }

}
