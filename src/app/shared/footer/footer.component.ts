import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
