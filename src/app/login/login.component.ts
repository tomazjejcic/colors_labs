import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
  }

  go() {
    console.log('HERE I AM');
  }

  // login(val) {
  //   console.log('VALUE: ', val);
  //   this.baseService.setPassword(val)
  //     .subscribe(pass => console.log('Pass Returned: ', pass));
  // }

}
