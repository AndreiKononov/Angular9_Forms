import { Component } from '@angular/core';

export class User {
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'my-app',
    template: `
        <div>
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required />
                <div [hidden]="name.valid || name.untouched" class="alert alert-danger">
                    Missing name
                </div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" name="email" [(ngModel)]="user.email" #email="ngModel" required pattern="[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}" />
                <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                    Incorrect email 
                </div>
            </div>
            <div class="form-group">
                <label>Телефон</label>
                <input class="form-control" name="phone" [(ngModel)]="user.phone" #phone="ngModel" required pattern="[0-9]{10}" />
                <div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">
                    Incorrect phone number
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-default" (click)="addUser()">Add</button>
            </div>
        </div>
    `
})

export class AppComponent {

    user: User = new User();

    addUser() {
        console.log(this.user);
    }
}
