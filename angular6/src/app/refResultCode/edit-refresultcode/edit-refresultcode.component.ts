import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {RefResultCodeService} from '../../service/refResultCode.service';
import {RefResultCode} from '../../model/refResultCode.model';

@Component({
  selector: 'app-edit-refrankingcode',
  templateUrl: './edit-refresultcode.component.html',
  styleUrls: ['./edit-refresultcode.component.css']
})
export class EditRefResultCodeComponent implements OnInit {

  refResultCode: RefResultCode;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private refResultCodeService: RefResultCodeService) {
  }

  ngOnInit() {
    const refResultCodeId = localStorage.getItem('editRefResultCodeId');
    if (!refResultCodeId) {
      alert('Invalid action.');
      this.router.navigate(['list-refresultcode']);
      return;
    }
    this.editForm = this.formBuilder.group({
      rankingCode: [],
      rankingDescription: ['', Validators.required]
    });
    this.refResultCodeService.getRefResultCodeById(+refResultCodeId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.refResultCodeService.updateRefResultCode(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-refresultcode']);
        },
        error => {
          alert(error);
        });
  }
}
