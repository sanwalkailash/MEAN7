import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  checkAuth:any;
  constructor(private auth:AuthGuard) {
    this.checkAuth=auth;
   }

  ngOnInit() {
  }

}
