import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RefResultCodeService} from '../../service/refResultCode.service';
import {RefResultCode} from '../../model/refResultCode.model';

@Component({
  selector: 'app-add-refrankingcode',
  templateUrl: './add-refresultcode.component.html',
  styleUrls: ['./add-refresultcode.component.css']
})
export class AddRefResultCodeComponent implements OnInit {


  addForm: FormGroup;
  submitted = false;
  refResultCode: RefResultCode[];

  constructor(private formBuilder: FormBuilder, private router: Router, private refResultCodeService: RefResultCodeService) {
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

    alert('Add refResultCode succeful');
    this.refResultCodeService.createRefResultCode(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-refresultcode']);
      });

  }
}
