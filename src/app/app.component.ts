import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'REST Api: Angular 4 and ngrx';

    navLinks = [
        {
            label: 'Videos',
            url: "/list"
        },
        {
            label: 'Add new',
            url: "/add-new"
        }

    ];

    consotructor() { }
}
