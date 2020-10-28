import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  entries:Entry[]= [ 
    new Entry(0, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", new Date(2020, 1, 1) ),
    new Entry(1, "Ornare suspendisse sed nisi lacus sedt", "Ornare suspendisse sed nisi lacus sed. Posuere morbi leo urna molestie at elementum. Bibendum est ultricies integer quis auctor elit sed. Quis auctor elit sed vulputate mi sit amet mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Varius morbi enim nunc faucibus a pellentesque sit amet. Sem nulla pharetra diam sit. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Consequat id porta nibh venenatis cras sed. Ut aliquam purus sit amet luctus venenatis lectus. Lobortis feugiat vivamus at augue eget. Laoreet sit amet cursus sit amet dictum sit amet. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Orci eu lobortis elementum nibh tellus. Nibh ipsum consequat nisl vel pretium lectus quam id. Parturient montes nascetur ridiculus mus. Nulla at volutpat diam ut venenatis tellus in metus. Consectetur adipiscing elit pellentesque habitant..", new Date(2020, 1, 2) ),
    new Entry(3, "Sit amet tellus cras adipiscing eni", "Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eget lorem dolor sed viverra ipsum nunc aliquet. Nascetur ridiculus mus mauris vitae ultricies. A cras semper auctor neque vitae tempus quam pellentesque nec. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque nec nam aliquam sem. Fringilla ut morbi tincidunt augue interdum velit euismod in. Id aliquet risus feugiat in. Sed augue lacus viverra vitae congue eu consequat ac. Ut morbi tincidunt augue interdum velit euismod in. Arcu felis bibendum ut tristique et egestas quis ipsum. Scelerisque purus semper eget duis at tellus.", new Date(2020, 1, 3) ),
    new Entry(4, "Faucibus pulvinar elementum integer enim", "Faucibus pulvinar elementum integer enim. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Egestas pretium aenean pharetra magna. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Habitant morbi tristique senectus et netus. Tincidunt eget nullam non nisi est sit amet facilisis. Ipsum consequat nisl vel pretium. Dignissim enim sit amet venenatis. Turpis tincidunt id aliquet risus feugiat in ante. Ac turpis egestas sed tempus urna et.", new Date(2020, 1, 4) ),
    new Entry(5, "Vulputate ut pharetra sit", "Vulputate ut pharetra sit amet aliquam id diam. Nibh praesent tristique magna sit amet purus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Dictum non consectetur a erat nam at lectus urna duis. Consectetur purus ut faucibus pulvinar elementum integer enim neque. In nibh mauris cursus mattis molestie a iaculis at erat. Nunc non blandit massa enim nec dui. Nec ultrices dui sapien eget mi. Aliquam purus sit amet luctus venenatis. Sodales neque sodales ut etiam sit. Et ultrices neque ornare aenean euismod elementum nisi quis. Nibh mauris cursus mattis molestie a iaculis. Sed felis eget velit aliquet sagittis id. Mauris a diam maecenas sed enim ut. Tortor dignissim convallis aenean et tortor at risus viverra. Consectetur adipiscing elit ut aliquam purus sit. Duis convallis convallis tellus id interdum velit laoreet id. Purus ut faucibus pulvinar elementum.", new Date(2020, 1, 5) ),
  ]
  addNewEntry(entry){
    console.log(entry)
    debugger
    let entriesLen = this.entries.length;
    entry.id = entriesLen + 1;
    entry.submitedDate = new Date(entry.ndate);
    this.entries.push(entry);
  }
  deleteEntry(num:number){
    this.entries.splice(num, 1)
  }
  constructor() { }

  ngOnInit() {
  }

}
