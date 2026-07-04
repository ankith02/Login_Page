import { Component, signal } from '@angular/core';
import { LoginComponent } from "./login-component/login-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('login');
}
