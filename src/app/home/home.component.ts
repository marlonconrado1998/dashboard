import { Component, OnInit } from '@angular/core';
import { User } from '../user-session/shared/user.model';
import { UserSessionService } from '../user-session/shared/user-session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}