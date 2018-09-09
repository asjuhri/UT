import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseURI   : string = 'http://192.168.43.230/UT_Api/';
  userName  : string ;
  // baseURI   : string = 'http://fams.sinarabipraya.com/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  msg_error(msg){
    console.log(msg)
    return msg;
  }
}
