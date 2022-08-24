import { Component, Directive, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// export class DashboardComponent implements OnInit {
//   displayList: any;
//   countPage: number = 1;
//   displayPrevious: boolean = false;
//   displayNext: boolean = true;
//   directiveList: string[] = [
//     "Directive1",
//     "Directive2",
//     "Directive3",
//     "Directive4",
//     "Directive5",
//     "Directive6",
//     "Directive7",
//     "Directive8",
//     "Directive9",
//     "Directive10",
//     "Directive11",
//     "Directive12",
//     "Directive13",
//     "Directive14",
//     "Directive15",
//     "Directive16",
//     "Directive17",
//     "Directive18",
//     "Directive19",
//     "Directive20",
//     "Directive21",
//     "Directive22",
//     "Directive23",
//     "Directive24", 
//     "Directive25"
//   ];

//   constructor(private auth : AuthService, private router: Router) { }

//   ngOnInit(): void {
//     this.displayList = this.directiveList.slice(0, 5);
//   }
// register(){
//   this.auth.logout();
// }

// getNext(){
//   if(this.countPage*5 > this.directiveList.length){
//     this.displayNext = false;
//   }
//   //this.displayList.filter((this.directiveList,idx) => idx < 2);
//   this.displayList = this.directiveList.slice(this.countPage*5, this.countPage*5 + 5);
//   this.countPage++;
//   if(this.countPage > 1){
//     this.displayPrevious = true;
//   }
  
// }

// getPrevious(){
//   this.countPage--;
//   this.displayList = this.directiveList.slice(this.countPage*5-5, this.countPage*5);
//   if(this.countPage > 1){
//     this.displayPrevious = true;
//   }
// }

// currentDate = new Date();
// createbot(){
//   this.router.navigate(['/create-bot'])
// }
//}

export class DashboardComponent implements OnInit {
  botlist = ["Directive-1", "Directive-2", "Directive-3", "Directive-4", "Directive-5", "Directive-6", "Directive-7", "Directive-8", "Directive-9", "Directive-10", ];
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
}
