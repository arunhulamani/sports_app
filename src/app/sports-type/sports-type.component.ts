import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TeamService } from '../team.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'sports-type',
  templateUrl: './sports-type.component.html',
  styleUrls: ['./sports-type.component.css']
})
export class SportsTypeComponent implements OnInit {

  constructor(private http: HttpClient, private teamService: TeamService) {}
  teams = [];
  ngOnInit() {
    this.teamService.getTeam().subscribe(responseTeam => this.teams = responseTeam);
  }

}
