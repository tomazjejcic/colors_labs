import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public obj;
  public colorsArr;

  private displayModeList = true;
  private gridMode = false;

  // public data.backgroundCol

  public data = {
    backgroundCol: 'rgba(55, 191, 25, 1)'
  }

  constructor(
    private baseService: BaseService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getColorsTwo();
  }



  generateArray(obj) {
    console.log('EVER HERE?');
    return Object.keys(obj).map((key) => obj[key]);
 }

  getColorsTwo() {
    this.http.get('https://api.myjson.com/bins/budfh')
      .subscribe(data => this.transformObject(data))
  }

  transformObject(data) {
    const newArr = []
    Object.keys(data).forEach( key => {
      // (data[key]);
      const colValues = data[key];
      const col = 'rgba(' + colValues[0] + ', ' + colValues[1] + ', ' + colValues[2] + ', ' + colValues[3] + ')'

      newArr.push([key, col])
      // console.log(data[key]); // value
    });

    this.colorsArr = newArr;
    // console.log('NEW AEE', newArr);
    // console.log('NEW AEE1', newArr[0][4]);
  }

  giveColors() {
    console.log('GIVE', this.obj.aliceblue);
    console.log('GIVE TYPE', typeof(this.obj))
  }
}
