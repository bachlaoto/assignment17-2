import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TournamentService} from '../../service/tournament.service';
import {Tournament} from '../../model/tournament.model';
import {TournamentOrganizer} from '../../model/tournamentOrganizer.model';
import {TournamentOrganizerService} from '../../service/tournamentOrganizer.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {


  addForm: FormGroup;
  submitted = false;
  tournament: Tournament[];
  tournamentOrganizers: TournamentOrganizer[];

  constructor(private formBuilder: FormBuilder, private router: Router, private tournamentService: TournamentService
    , private tournamentOrganizerService: TournamentOrganizerService) {
  }

  get f() {
    return this.addForm.controls;
  }

  ngOnInit() {
    this.tournamentOrganizerService.getTournamentOrganizer()
      .subscribe(data => {
        this.tournamentOrganizers = data;
      });
    this.addForm = this.formBuilder.group({
      tournamentId: 0,
      tournamentOrganizer: ['', Validators.required],
      tournamentStartDate: ['', Validators.required],
      tournamentEndDate: ['', Validators.required],
      tournamentName: ['', Validators.required],
      tournamentDetails: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    alert('Add tournament succeful');
    this.tournamentService.createTournament(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-player']);
      });

  }
}
