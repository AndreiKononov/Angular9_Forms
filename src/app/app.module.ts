import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppComponent2 } from "./app.component2";

@NgModule({
    imports:        [ BrowserModule, FormsModule],
    declarations:   [ AppComponent, AppComponent2 ],
    bootstrap:      [ AppComponent, AppComponent2 ],
})

export class AppModule { }
