import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

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
                    <label>Phone</label>
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

    constructor(private formBuilder: FormBuilder) {

        this.myForm = formBuilder.group({

            "userName": ["Tom", [Validators.required]],
            "userEmail": ["", [ Validators.required, Validators.email]],
            "phones": formBuilder.array([ ["+7", Validators.required]]),
        });
    }
    addPhone() {
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
    }

    submit() {
        console.log(this.myForm);
    }
}
