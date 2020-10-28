import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-diary-description',
  templateUrl: './diary-description.component.html',
  styleUrls: ['./diary-description.component.css']
})
export class DiaryDescriptionComponent implements OnInit {
 @Input() entry:Entry;
  constructor() { }

  ngOnInit() {
  }

}
