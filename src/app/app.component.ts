import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav>
      <a routerLink="/landing">Landing</a> |
      <a routerLink="/register">Register</a> |
      <a routerLink="/next-step">Next Step</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
