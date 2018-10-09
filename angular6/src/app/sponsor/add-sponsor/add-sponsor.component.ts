import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SponsorService} from '../../service/sponsor.service';
import {Sponsor} from '../../model/sponsor.model';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {


  addForm: FormGroup;
  submitted = false;
  sponsor: Sponsor[];

  constructor(private formBuilder: FormBuilder, private router: Router, private sponsorService: SponsorService) {
  }

  get f() {
    return this.addForm.controls;
  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      sponsorId: 0,
      sponsorName: ['', Validators.required],
      sponsorPhone: ['', Validators.required],
      otherSponsorDetails: ['', Validators.required]

    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    alert('Add sponsor succeful');
    this.sponsorService.createSponsor(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-sponsor']);
      });

  }
}
