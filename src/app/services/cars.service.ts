import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class CarsService {

  private apiUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  LoadCarsData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      /**
       * The tap operator however takes a data, apply a function to that data but returns the original data, 
       * if the function bothered to return a result, tap just ignores it
       */
      tap((data: any) => data),
      catchError((err) => {        
          throw 'Error in source. Details: ' + err; 
      })
    );
  }
}
