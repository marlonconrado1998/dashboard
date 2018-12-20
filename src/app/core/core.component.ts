import { Component } from '@angular/core';
import { User } from '../user-session/shared/user.model';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.css']
})
export class CoreComponent {
    public user: User = new User();
}