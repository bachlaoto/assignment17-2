import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClubService} from '../../service/club.service';
import {Club} from '../../model/club.model';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {


  addForm: FormGroup;
  submitted = false;
  club: Club[];

  constructor(private formBuilder: FormBuilder, private router: Router, private clubService: ClubService) {
  }

  get f() {
    return this.addForm.controls;
  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      clubId: 0,
      clubName: ['', Validators.required],
      clubAddress: ['', Validators.required],
      otherClubDetails: ['', Validators.required],
      organizerId: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    alert('Add club succeful');
    this.clubService.createClub(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-club']);
      });

  }
}
