import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-file',
  templateUrl: './medical-file.component.html',
  styleUrls: ['./medical-file.component.scss']
})
export class MedicalFileComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
