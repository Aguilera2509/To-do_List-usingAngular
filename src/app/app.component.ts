import { Component } from '@angular/core';
import { FormCardComponent } from "./components/form-card/form-card.component";
import { ListCardComponent } from "./components/list-card/list-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormCardComponent, ListCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
