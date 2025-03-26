import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LmlGridWebsiteComponent } from "../../layouts/lml-grid-website/lml-grid-website.component";
import LmlNavbarComponent from "../../shared/components/lml-navbar/lml-navbar.component";
import { LmlIntroductionComponent } from "../../components/lml-introduction/lml-introduction.component";

@Component({
  selector: 'lml-website',
  imports: [RouterOutlet, LmlGridWebsiteComponent, LmlNavbarComponent, LmlIntroductionComponent],
  templateUrl: './lml-website.component.html',})
export class LmlWebsiteComponent { }
