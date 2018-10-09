import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {SponsorService} from '../../service/sponsor.service';
import {Sponsor} from '../../model/sponsor.model';

@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.css']
})
export class EditSponsorComponent implements OnInit {

  sponsor: Sponsor;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private sponsorService: SponsorService) {
  }

  ngOnInit() {
    const sponsorId = localStorage.getItem('editSponsorId');
    if (!sponsorId) {
      alert('Invalid action.');
      this.router.navigate(['list-sponsor']);
      return;
    }
    this.editForm = this.formBuilder.group({
      rankingCode: [],
      sponsorName: ['', Validators.required],
      sponsorPhone: ['', Validators.required],
      otherSponsorDetails: ['', Validators.required]
    });
    this.sponsorService.getSponsorById(+sponsorId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.sponsorService.updateSponsor(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-sponsor']);
        },
        error => {
          alert(error);
        });
  }
}
