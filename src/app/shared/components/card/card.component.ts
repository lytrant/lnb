import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataCard: Card;
  @Input() booleanInput: boolean = false;
	@Input() stringInput: 'some-thing' | 'another-thing' | 'a-third-thing' = 'another-thing';
  
  isLoved: boolean;
  totalLoved: number;
  totalViewed: number;

  constructor() { }

  ngOnInit() {
    this.isLoved = true;
    this.totalLoved = 1;
    this.totalViewed = 5;
  }

  onClickItem() {
    alert('asd');
  }

  onFavorite(e: any) {
    this.isLoved = !this.isLoved;
    this.isLoved ? this.totalLoved = this.totalLoved + 1 : this.totalLoved = this.totalLoved - 1;

  }

}
