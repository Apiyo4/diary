import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {
   newEntry:Entry = new Entry(0, '','', new Date());
   @Output() addEntry = new EventEmitter<Entry>();

   submitsForm(){
     this.addEntry.emit(this.newEntry);
   }

  constructor() { }

  ngOnInit() {
  }

}
