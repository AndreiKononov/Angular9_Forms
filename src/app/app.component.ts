import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
            <div formArrayName="phones">
                <div class="form-group" *ngFor="let phone of myForm.controls['phones']['controls']; let i = index">
                    <label>Phone number</label>
                    <input class="form-control" formControlName="{{i}}" />
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-default" (click)="addPhone()">Add phone</button>
                <button class="btn btn-default" [disabled]="myForm.invalid">Submit</button>
            </div>
        </form>
    `
})

export class AppComponent {

    myForm : FormGroup;

    constructor() {
        this.myForm = new FormGroup({

            "userName": new FormControl("Tom", [ Validators.required ]),
            "userEmail": new FormControl("", [ Validators.required, Validators.email ]),
            "phones": new FormArray([ new FormControl("+375", Validators.required) ]),
        });
    }

    // to add dynamically new objects
    // Flow:
    // 1. We get object of form using expression "this.myForm.controls["phones"]" ;
    // 2. We convert this object to type FormArray;
    // 3. We push to array a new element;
    addPhone() {
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+375", Validators.required));
    }

    submit() {
        console.log(this.myForm);
    }
}
