import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('\dashboard');
  }

}
