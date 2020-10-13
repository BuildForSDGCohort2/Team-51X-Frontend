import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;
  public isCollapsed2 = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  openSidebar(element): void {
    console.log(element);
  }

  onOpenMenu() {
    if (this.isCollapsed) {
      this.isCollapsed = !this.isCollapsed;
      this.isCollapsed2 = false;
    } else {
      this.isCollapsed = !this.isCollapsed;
      this.isCollapsed2 = true;
    }
  }

}
