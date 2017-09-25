import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TeamService } from './team.service';
import 'rxjs/add/operator/map';


interface SportsResponse {
  name: string;
  type: string;
  players: number;
  duration: string;
  equipmentsRequired: true;
  mainBody: string;
}
@Component({
  selector: 'test-comp',
  templateUrl: './team.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  constructor(private http: HttpClient, private teamService: TeamService) {}
   teams = [];
   newMatches = [];

  ngOnInit() {
      this.teamService.getTeam().subscribe(responseTeam => this.teams = responseTeam);
    }

  getMoreInfo() {
      this.teamService.getNewMatches().subscribe(responseTeam => this.newMatches = responseTeam);
    }
}
