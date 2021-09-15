import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: string ='welcome'
  name='';

  constructor(private rout: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message);
    this.name=this.rout.snapshot.params['name']
    
  }

  
}
