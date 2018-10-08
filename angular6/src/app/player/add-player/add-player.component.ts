import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PlayerService} from '../../service/player.service';
import {Player} from '../../model/player.model';
import {RefRankingCodeService} from '../../service/refRankingCode.service';
import {RefRankingCode} from '../../model/refRankingCode.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {


  addForm: FormGroup;
  submitted = false;
  player: Player[];
  refRankingCodes: RefRankingCode[];

  constructor(private formBuilder: FormBuilder, private router: Router, private playerService: PlayerService
    , private refRankingCodeService: RefRankingCodeService) {
  }

  get f() {
    return this.addForm.controls;
  }

  ngOnInit() {
    this.refRankingCodeService.getRefRankingCode()
      .subscribe(data => {
        this.refRankingCodes = data;
      });
    this.addForm = this.formBuilder.group({
      playerId: 0,
      chessClubs: ['', Validators.required],
      refRankingCodes: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      otherPlayerDetails: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    alert('Add player succeful');
    this.playerService.createPlayer(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-player']);
      });

  }
}
