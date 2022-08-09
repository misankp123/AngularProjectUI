import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

}
