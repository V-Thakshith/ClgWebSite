import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Sub } from 'src/app/subjects';
import { subjects} from 'src/app/mock-subjects'

@Component({
  selector: 'app-sis',
  templateUrl: './sis.component.html',
  styleUrls: ['./sis.component.css']
})
export class SisComponent implements OnInit {
  USN:any
  usn:any
  subjects:Sub[]=subjects;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params:any)=>{
      console.log(params.data)
      
      this.usn=params.data
      this.USN=this.usn.toUpperCase();

    })
    
  }

}
