import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebars;
  sidebars2;
  activeState = 1;

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {

    this.http.get('assets/data/sidebar.json')
      .subscribe(data => {
        this.sidebars = data;
      });

    this.http.get('assets/data/sidebar2.json')
      .subscribe(data => {
        this.sidebars2 = data;
      });
  }

  setStateAsActive(state) {
    this.activeState = state;
  }

}
