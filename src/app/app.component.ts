import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'Honda-Portals-project';
    loader: boolean = false;
    constructor() {

    }
    showLoader() {
        this.loader = !this.loader;
        if (this.loader) {
            console.log(document.body.style.overflow);
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                this.loader = !this.loader;
                document.body.style.overflow = "";
            }, 2000);
        }
    }
}
