import { Component } from '@angular/core';
import { EtlapComponent } from "./etlap/etlap.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtlapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ettermenu';
}
