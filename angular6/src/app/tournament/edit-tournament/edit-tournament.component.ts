import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {TournamentService} from '../../service/tournament.service';
import {Tournament} from '../../model/tournament.model';
import {TournamentOrganizer} from '../../model/organizer.model';
import {OrganizerService} from '../../service/organizer.service';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {

  tournament: Tournament;
  editForm: FormGroup;
  tournamentOrganizers: TournamentOrganizer[];

  constructor(private formBuilder: FormBuilder, private router: Router, private tournamentService: TournamentService
    , private tournamentOrganizerService: OrganizerService) {
  }

  ngOnInit() {
    const tournamentId = localStorage.getItem('editTournamentId');
    if (!tournamentId) {
      alert('Invalid action.');
      this.router.navigate(['list-player']);
      return;
    }
    this.tournamentOrganizerService.getTournamentOrganizer()
      .subscribe(data => {
        this.tournamentOrganizers = data;
      });
    this.editForm = this.formBuilder.group({
      tournamentId: [],
      tournamentOrganizers: ['', Validators.required],
      tournamentStartDate: ['', Validators.required],
      tournamentEndDate: ['', Validators.required],
      tournamentName: ['', Validators.required],
      tournamentDetails: ['', Validators.required],
    });
    this.tournamentService.getTournamentById(+tournamentId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.tournamentService.updateTournament(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-tournament']);
        },
        error => {
          alert(error);
        });
  }
}
