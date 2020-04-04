import { Component } from '@angular/core';

export class User {
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
        <div>
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required />
<!--                <div [hidden]="name.valid || name.untouched" class="alert alert-danger">-->
<!--                    Missing name-->
<!--                </div>-->
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="email" name="email" [(ngModel)]="user.email" #email="ngModel" required email />
<!--                <input class="form-control" name="email" [(ngModel)]="user.email" #email="ngModel" required pattern="[a-zA-Z_0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}" />-->
<!--                <div [hidden]="email.valid || email.untouched" class="alert alert-danger">-->
<!--                    Incorrect email -->
<!--                </div>-->
            </div>
            <div class="form-group">
                <label>Phone number</label>
                <input class="form-control" name="phone" [(ngModel)]="user.phone" #phone="ngModel" required pattern="[0-9]{11}" />
<!--                <div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">-->
<!--                    Incorrect phone number-->
<!--                </div>-->
            </div>
            <div class="form-group">
                <button [disabled]="name.invalid || email.invalid || phone.invalid" class="btn btn-default" (click)="addUser()">Add</button>
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
