import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antecedent',
  templateUrl: './antecedent.component.html',
  styleUrls: ['./antecedent.component.scss']
})
export class AntecedentComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
