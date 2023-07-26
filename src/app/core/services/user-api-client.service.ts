import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user-type";
import { map, Observable } from "rxjs";
import { Filters } from "../models/filters-type";

type GetDataResponse = {
  users: {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
  }[],
  total: number,
  skip: number,
  limit: number,
}

@Injectable({
  providedIn: 'root'
})
export class UserApiClientService {
  constructor(
    private http: HttpClient
  ) { }

  getData(url: string): Observable<User[]> {
    return this.http.get<GetDataResponse>(url).pipe(map(result =>
      result.users.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }))))
  }

  getDataWithFilters(url: string, filters: Filters): Observable<User[]>{
    return this.http.get<GetDataResponse>(url + '/search?&q=' + filters.query + '&limit=' + filters.limits).pipe(
      map(result =>
        result.users.map(user => ({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
      }))))
  }
}
