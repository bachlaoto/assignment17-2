import {Component, OnInit} from '@angular/core';
import {Player} from '../../model/player.model';
import {Router} from '@angular/router';
import {PlayerService} from '../../service/player.service';
import {Club} from '../../model/club.model';
import {ClubService} from '../../service/club.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
  players: Player[];
  clubs: Club[];

  constructor(private router: Router, private playerService: PlayerService, private clubService: ClubService) {

  }

  ngOnInit() {
    // if ( sessionStorage.getItem('loginok') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.playerService.getPlayer()
    //     .subscribe(data => {
    //       this.players = data;
    //     });
    // }
    if (sessionStorage.getItem('loginok') == null) {
      this.router.navigate(['']);
    }
    this.playerService.getPlayer()
      .subscribe(data => {
        this.players = data;
      });
    this.clubService.getClub()
      .subscribe(data => {
        this.clubs = data;
      });
  }

  deletePlayer(player: Player): void {
    this.playerService.deletePlayer(player.playerId)
      .subscribe(data => {
        this.players = this.players.filter(u => u !== player);
      });
  }

  editPlayer(player: Player): void {
    localStorage.removeItem('editPlayerId');
    localStorage.setItem('editPlayerId', player.playerId.toString());
    this.router.navigate(['edit-player']);
  }


}
