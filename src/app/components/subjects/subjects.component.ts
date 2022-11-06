import { Component, Input, OnInit } from '@angular/core';
import { Sub } from 'src/app/subjects';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  @Input()
  subject!:Sub ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
