import {Component, OnInit} from '@angular/core';
import {Tournament} from '../../model/tournament.model';
import {Router} from '@angular/router';
import {TournamentService} from '../../service/tournament.service';
import {Club} from '../../model/club.model';
import {ClubService} from '../../service/club.service';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.css']
})
export class ListTournamentComponent implements OnInit {
  tournaments: Tournament[];
  clubs: Club[];

  constructor(private router: Router, private tournamentService: TournamentService, private clubService: ClubService) {

  }

  ngOnInit() {
    // if ( sessionStorage.getItem('loginok') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.tournamentService.getTournament()
    //     .subscribe(data => {
    //       this.tournaments = data;
    //     });
    // }
    if (sessionStorage.getItem('loginok') == null) {
      this.router.navigate(['']);
    }
    this.tournamentService.getTournament()
      .subscribe(data => {
        this.tournaments = data;
      });
    this.clubService.getClub()
      .subscribe(data => {
        this.clubs = data;
      });

  }

  deleteTournament(tournament: Tournament): void {
    this.tournamentService.deleteTournament(tournament.tournamentId)
      .subscribe(data => {
        this.tournaments = this.tournaments.filter(u => u !== tournament);
      });
  }

  editTournament(tournament: Tournament): void {
    localStorage.removeItem('editTournamentId');
    localStorage.setItem('editTournamentId', tournament.tournamentId.toString());
    this.router.navigate(['edit-tournament']);
  }


}
