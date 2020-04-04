import { Component } from '@angular/core';

export class Phone {
    constructor(public title: string,
                public price: number,
                public company: string)
    { }
}

@Component({
    selector: 'my-app2',
    template: `
        <div>
            <div class="form-group">
                <label>Model title</label>
                <input class="form-control" name="title" [(ngModel)]="phone.title" />
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="number" class="form-control" name="price" [(ngModel)]="phone.price" />
            </div>
            <div class="form-group">
                <label>Brand</label>
                <select class="form-control" name="company" [(ngModel)]="phone.company">
                    <option  *ngFor="let comp of companies" [value]="comp">
                        {{comp}}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-default" (click)="addPhone()">Add</button>
            </div>
        </div>
        <div>
            <h3>Added elements</h3>
            <ul *ngFor="let p of phones">
                <li>{{p.title}} ({{p.company}}) - {{p.price}}</li>
            </ul>
        </div>
    `
})

export class AppComponent2 {
    // this model encapsulates values of input form
    phone: Phone = new Phone("", 0, "Huawei");
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    addPhone() { // before adding will be created a separate object which is initialized values from "phone" variable
        this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    }
}