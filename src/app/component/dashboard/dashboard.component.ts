import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  botlist = ["Directive-1", "Directive-2", "Directive-3", "Directive-4", "Directive-5", "Directive-6", "Directive-7", "Directive-8", "Directive-9", "Directive-10", "Directive-11", "Directive-12", "Directive-13", "Directive-14", "Directive-15", "Directive-16", "Directive-17", "Directive-18", "Directive-19"];
  numbering = 0
  public displaybotlist = this.botlist.slice(this.numbering, this.numbering + 5);
  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  nextBots(){
    if(this.numbering + 5 < this.botlist.length){
      this.numbering += 5;
      this.displaybotlist = this.botlist.slice(this.numbering, this.numbering + 5);
    } else{
      this.numbering = 0;
      this.displaybotlist = this.botlist.slice(this.numbering, this.numbering + 5);

    }

  }
register(){
  this.auth.logout();
}

currentDate = new Date();
// createbot(){
//   this.router.navigate(['/create-bot'])
// }
}
