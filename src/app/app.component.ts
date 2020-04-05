import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
        <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" name="name" formControlName="userName" />
                <div class="alert alert-danger" *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
                    Name missed
                </div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" name="email" formControlName="userEmail" />
                <div class="alert alert-danger" *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                    Incorrect email
                </div>
            </div>
            <div class="form-group">
                <label>Телефон</label>
                <input class="form-control" name="phone" formControlName="userPhone" />
                <div class="alert alert-danger" *ngIf="myForm.controls['userPhone'].invalid && myForm.controls['userPhone'].touched">
                    Incorrect phone number
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-default" [disabled]="myForm.invalid">Submit</button>
            </div>
        </form>
    `
})

export class AppComponent {

    myForm : FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            "userName": new FormControl("Tom", Validators.required),
            "userEmail": new FormControl("", [ Validators.required, Validators.email ]),
            "userPhone": new FormControl("", Validators.pattern("[0-9]{10}")),
        });
    }

    submit() {
        console.log(this.myForm);
    }
}
