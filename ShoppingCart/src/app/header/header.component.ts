import { Component } from '@angular/core';
import {MatIconModule,MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [MatIconModule,MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'custom_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cart-2-svgrepo-com.svg')
    );
  }

}
