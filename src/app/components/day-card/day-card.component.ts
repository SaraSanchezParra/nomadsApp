import { Component, Input } from '@angular/core';
import { Day } from 'src/app/models/day';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent {

  @Input() dia!:Day
  @Input() i!:number
  ReadMore: boolean = true
  visible: boolean = false

  onClick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible
  }
}
