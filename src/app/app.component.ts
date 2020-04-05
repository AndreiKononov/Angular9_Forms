import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
        <form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
<!--        <form #myForm="ngForm" novalidate>-->
<!--        <form class="ng-pristine ng-untouched ng-valid" novalidate="">-->
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" name="name" [(ngModel)]="name" required />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" name="email" ngModel required email />
            </div>
            <div class="form-group">
                <label>Phone number</label>
                <input class="form-control" name="phone" ngModel required pattern="[0-9]{11}" />
            </div>
            <div class="form-group">
<!--                <button [disabled]="myForm.invalid" class="btn btn-default" (click)="submit(myForm)">Add</button>-->
                <input type="submit" [disabled]="myForm.invalid" class="btn btn-default" value="Submit" />
            </div>
        </form>
        <div>Имя: {{myForm.value.name}}</div>
        <div>Email: {{myForm.value.email}}</div>
    `
})

export class AppComponent {

    name: string;
    email: string;
    phone: string;

    // submit(form: NgForm) {
    //     console.log(form);
    // }

    onSubmit(form: NgForm) {
        console.log(form);
    }
}
