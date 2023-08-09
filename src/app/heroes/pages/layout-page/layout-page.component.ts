import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  get user(): User | undefined {
    return this.authService.currentUser
  }

  onLogout() {
    this.authService.logout()

    this.router.navigate(['/auth/login'])
  }

}
