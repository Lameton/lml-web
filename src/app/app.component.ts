import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LmlGridWebsiteComponent } from "./layouts/lml-grid-website/lml-grid-website.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LmlGridWebsiteComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'lml-web';
  }
