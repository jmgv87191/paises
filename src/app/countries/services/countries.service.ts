import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, delay } from 'rxjs';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor( private http: HttpClient ) { }

  private getCountriesRequest( url:string ): Observable<Country[]>{
    return this.http.get<Country[]>( url ).pipe( 
      catchError ( () =>of([])
      )
  )
  }

  searchCountryByAlphaCode( code: string ):Observable<Country | null>{
    return this.http.get<Country[]>( this.apiUrl + "/alpha/"+ code  )
    .pipe( 
      map( countries => countries.length > 0? countries[0]:null ),
      catchError ( () =>of(null)
      )
  )

  }

  searchCapital( term: string ):Observable<Country[]> {
    return this.getCountriesRequest( this.apiUrl + "/capital/"+ term )

}

searchByCountry(  term: string ):Observable<Country[]>{
  return this.getCountriesRequest( this.apiUrl + "/name/"+ term )

}

searchByRegion( term: string):Observable<Country[]>{
  return this.getCountriesRequest( this.apiUrl + "/region/"+ term )

}





}
