import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;


  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    let myid= 0;

    this.route.params.subscribe(res=> myid = res.id);
     
    myid++;
    
    console.log(myid)
   }

  ngOnInit() {
  //vi har tillgång till goal där vi prenumererar på responset till this.goals blir res
  let kalle;
  this._data.goal.subscribe(res => this.goals = res); 
   
  }
 

  sendMeHome(){
    this.router.navigate([''])
  }

}
