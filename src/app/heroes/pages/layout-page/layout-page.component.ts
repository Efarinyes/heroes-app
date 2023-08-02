import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'llistat', icon: 'label', url: './list'},
    { label: 'Afegir', icon: 'add', url: './new-hero'},
    { label: 'Cercar', icon: 'search', url: './search'}
  ]

}
