import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {Status} from './status';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import {Devices} from './device_table';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(
      private http: HttpClient
  ) { }
    //
    // private extractData(res: Response) {
    //     let body = res;
    //     return body || { };
    // }

    private statusUrl = 'api/status';  // URL to web api
    private deviceUrl = 'api/devices';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  getStatus (): Observable<any> {
    return this.http.get<any>('http://localhost:3000/status').pipe(
        // map(this.extractData)
      catchError(this.handleError('getStatus', []))
    );
  }

  getDevices (userID: string): Observable<Devices[]> {
      const params = new HttpParams().set('user_id', userID);
      return this.http.post<Devices[]>('http://localhost:3000/device/detail', params).pipe(
      catchError(this.handleError( 'getDevices' , []))
    );
  }
  // userID: string, id: string
  deleteD(_id: string){
    console.log('enter service' + _id);
    //   const params = new HttpParams().set('_id', ID);
     return this.http.post<Devices[]>('http://localhost:3000/device/delete', {
          '_id': _id
      }).pipe(
          catchError(this.handleError( 'getDevices' , []))
      );
  }

  getAccounts(): Observable<User[]> {
      return this.http.get<any>('http://localhost:3000/account').pipe(
          // map(this.extractData)
          catchError(this.handleError('getStatus', []))
      );
  }

  addAccount(Username: string, Password: string, Email: string) {
    console.log('add account');
      // const params = new HttpParams().set('username', Username).set('password', Password).set('email', Email);
      // const nurl = 'http://localhost:3000/account' + '?' + 'username=' + Username + '&password=' + Password + '&email=' + Email;
      // console.log(nurl);
      // <Devices[]>
      return this.http.post('http://localhost:3000/account', {
        'username': Username,
          'password': Password,
          'email': Password
      }).pipe(
          catchError(this.handleError( 'getDevices' , []))
      );
  }

  addDevices (id: string, name: string, location: string, kind: string) {
        return this.http.post('http://localhost:3000/device', {
            'id': id,
            'user_id': localStorage.getItem('_id'),
            'name': name,
            'location': location,
            'deviceType': kind
        }).pipe(
            // tap((devices: Devices) => this.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError<Devices>('addDevices'))
        );
    }

  changePassword(password: string){
      return this.http.post('http://localhost:3000/account/change',{
          '_id': localStorage.getItem('_id'),
          'password': password
      }).pipe(
          // tap((devices: Devices) => this.log(`added hero w/ id=${hero.id}`)),
          catchError(this.handleError<Devices>('addDevices'))
      );
    }
  // deleteDevices ( devices: Devices | number): Observable<Devices> {
  //   const id = typeof devices === 'number' ? devices : devices.id;
  //   const url = `${this.deviceUrl}/${id}`;
  //
  //
  //   return this.http.delete<Devices>(url, httpOptions).pipe(
  //     catchError(this.handleError<Devices>( 'deleteDevices'))
  //   );

}
