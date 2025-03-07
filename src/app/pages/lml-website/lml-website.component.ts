import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LmlGridWebsiteComponent } from "../../layouts/lml-grid-website/lml-grid-website.component";
import LmlNavbarComponent from "../../shared/components/lml-navbar/lml-navbar.component";

@Component({
  selector: 'lml-website',
  imports: [RouterOutlet, LmlGridWebsiteComponent, LmlNavbarComponent],
  templateUrl: './lml-website.component.html',})
export class LmlWebsiteComponent { }
