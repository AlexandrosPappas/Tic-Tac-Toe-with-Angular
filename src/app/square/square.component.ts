import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() value: 'X' | 'O';

}
