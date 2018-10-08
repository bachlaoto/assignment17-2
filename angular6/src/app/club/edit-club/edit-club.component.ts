import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {ClubService} from '../../service/club.service';
import {Club} from '../../model/club.model';
@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {

  club: Club;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private clubService: ClubService) {
  }

  ngOnInit() {
    const clubId = localStorage.getItem('editClubId');
    if (!clubId) {
      alert('Invalid action.');
      this.router.navigate(['list-club']);
      return;
    }
    this.editForm = this.formBuilder.group({
      clubId: [],
      clubName: ['', Validators.required],
      clubAddress: ['', Validators.required],
      otherClubDetails: ['', Validators.required],
      organizerId: ['', Validators.required]
    });
    this.clubService.getClubById(+clubId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.clubService.updateClub(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-club']);
        },
        error => {
          alert(error);
        });
  }
}
