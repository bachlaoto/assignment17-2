import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RefRankingCodeService} from '../../service/refRankingCode.service';
import {RefRankingCode} from '../../model/refRankingCode.model';

@Component({
  selector: 'app-add-refrankingcode',
  templateUrl: './add-refrankingcode.component.html',
  styleUrls: ['./add-refrankingcode.component.css']
})
export class AddRefRankingCodeComponent implements OnInit {


  addForm: FormGroup;
  submitted = false;
  refRankingCode: RefRankingCode[];

  constructor(private formBuilder: FormBuilder, private router: Router, private refRankingCodeService: RefRankingCodeService) {
  }

  get f() {
    return this.addForm.controls;
  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      rankingCode: 0,
      rankingDescription: ['', Validators.required]

    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    alert('Add refRankingCode succeful');
    this.refRankingCodeService.createRefRankingCode(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-refrankingcode']);
      });

  }
}
