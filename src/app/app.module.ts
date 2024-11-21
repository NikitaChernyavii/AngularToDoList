import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


// import { CommonModule } from "@angular/common"
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { FormsModule } from "@angular/forms";





@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserModule,
        TodosComponent,
        FormsModule

    ],

    providers: [],
    bootstrap: [AppComponent]   


})


export class AppModule {}
