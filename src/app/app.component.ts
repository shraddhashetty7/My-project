import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/landing">Landing</a> |
      <a routerLink="/register">Register</a> |
      <a routerLink="/next-step">Next Step</a> |
      <a routerLink="/details">Details</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Optional, if tests complain about missing property:
  title = 'Matrimonial-App';
}
