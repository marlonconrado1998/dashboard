import { Component } from '@angular/core';
import { UserSessionService } from './user-session/shared/user-session.service';
import { User } from './user-session/shared/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // user: User = new User();
    // activeNavbar: boolean = false;
    // state = "home";

    // constructor(public userSession: UserSessionService) {
    //     this.start();
    // }

    // toogleNavbar() {
    //     this.activeNavbar = !this.activeNavbar;
    // }

    // get getUser(): string {
    //     return `${this.user.rol} Wigilabs`;
    // }

    // start(): void {
    //     this.user = this.userSession.get();
    //     window.addEventListener("storage", this.storageEventListener.bind(this));
    // }

    // storageEventListener(event: StorageEvent) {
    //     if (event.storageArea.userSession) {
    //         this.user = this.userSession.get();
    //     }
    // }
}
