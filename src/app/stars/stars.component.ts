import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() /*该装饰器，表示当前组件的rating值由它的父组件传递给它*/
  private rating = 0;

  private starts: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.starts = [];
    for (let i = 1; i <= 5; i++) {
      this.starts.push(i > this.rating);
    }
  }

}
