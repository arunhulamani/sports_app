import { Component, OnInit, } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TeamService } from './team.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'test-comp',
  templateUrl: './team.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  constructor(private http: HttpClient, private teamService: TeamService) {}
   teams = [];
   newMatches = [];
   today: number = Date.now();

  ngOnInit() {
      this.teamService.getTeam().subscribe(responseTeam => this.teams = responseTeam);
    }

  getMoreInfo(gameName) {
      if (gameName === 'cricket') {
        this.teamService.getNewMatches().subscribe(responseTeam => this.newMatches = responseTeam);
      } else {
        return this.newMatches = null;
      }
    }
}
