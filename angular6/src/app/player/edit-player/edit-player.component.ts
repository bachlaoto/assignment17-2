import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {PlayerService} from '../../service/player.service';
import {Player} from '../../model/player.model';
import {Club} from '../../model/club.model';
import {RefRankingCodeService} from '../../service/refRankingCode.service';
import {ClubService} from '../../service/club.service';
import {RefRankingCode} from '../../model/refRankingCode.model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  player: Player;
  editForm: FormGroup;
  clubs: Club[];
  refRankingCodes: RefRankingCode[];

  constructor(private formBuilder: FormBuilder, private router: Router, private playerService: PlayerService,
              private refRankingCodeService: RefRankingCodeService, private clubService: ClubService) {
  }

  ngOnInit() {
    const playerId = localStorage.getItem('editPlayerId');
    if (!playerId) {
      alert('Invalid action.');
      this.router.navigate(['list-player']);
      return;
    }
    this.editForm = this.formBuilder.group({
      playerId: [],
      chessClubs: ['', Validators.required],
      refRankingCodes: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      otherPlayerDetails: ['', Validators.required]

    });
    this.playerService.getPlayerById(+playerId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
    this.clubService.getClub()
      .subscribe(data => {
        this.clubs = data;
      });
    this.refRankingCodeService.getRefRankingCode()
      .subscribe(data => {
        this.refRankingCodes = data;
      });
  }

  onSubmit() {
    this.playerService.updatePlayer(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-player']);
        },
        error => {
          alert(error);
        });
  }
}
