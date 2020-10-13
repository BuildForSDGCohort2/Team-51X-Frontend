import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biometrie',
  templateUrl: './biometrie.component.html',
  styleUrls: ['./biometrie.component.scss']
})
export class BiometrieComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
