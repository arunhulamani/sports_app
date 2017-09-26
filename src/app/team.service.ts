import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  getTeam(): Observable<any> {
    return this.http.get('http://localhost:3000/api/sports').map((response: Response) => response.json());
  }

}
