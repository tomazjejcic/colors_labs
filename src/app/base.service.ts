import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {

  url: '//10.9.0.25:1234/';
  colorsUrl: 'https://api.myjson.com/bins/budfh';

  // public connection = new WebSocket('ws://10.9.0.25:1234/', ['soap', 'xmpp']);
  public connection = new WebSocket('ws://10.9.0.25:1234/');


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(
    private http: HttpClient
  ) { }

  login(pass) {
    console.log('Base Passwor', pass);
    // this.setPassword(pass);
  }

  // public getColors():  {
  // // public getColors(): Observable<Object> {
  //   // console.log('service');
  //   this.http.get<Object>(this.colorsUrl)
  //     .subscribe(data => console.log('dataaa', data))
  //     // .pipe(t<any> => console.log('ttt', t))
  //     // .pipe()
  // }

  // public setPassword(pass): Observable<any> {
  // setPassword(pass) {
    // return this.http.post(this.url, pass, this.httpOptions);
    // this.connection.onopen = function () {
    //   this.connection.send('Ping'); // Send the message 'Ping' to the server
    // };

    // this.connection.onopen = function () {
    //   return this.connection.send('Ping'); // Send the message 'Ping' to the server
    // };

    // this.connection.onopen = function() {
    //   return connection.send('Ping');
    // }

    // const lll: any = this.connection.send(pass);
    // return this.connection.send(pass);

    // const a: any = this.connection.send(pass);
    // return this.connection.send();

    // console.log('WWWW', www);
    // return this.connection.send(pass);
  }

// }
