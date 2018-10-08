import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {RefRankingCodeService} from '../../service/refRankingCode.service';
import {RefRankingCode} from '../../model/refRankingCode.model';

@Component({
  selector: 'app-edit-refrankingcode',
  templateUrl: './edit-refrankingcode.component.html',
  styleUrls: ['./edit-refrankingcode.component.css']
})
export class EditRefRankingCodeComponent implements OnInit {

  refRankingCode: RefRankingCode;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private refRankingCodeService: RefRankingCodeService) {
  }

  ngOnInit() {
    const refRankingCodeId = localStorage.getItem('editRefRankingCodeId');
    if (!refRankingCodeId) {
      alert('Invalid action.');
      this.router.navigate(['list-refrankingcode']);
      return;
    }
    this.editForm = this.formBuilder.group({
      rankingCode: [],
      rankingDescription: ['', Validators.required]
    });
    this.refRankingCodeService.getRefRankingCodeById(+refRankingCodeId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.refRankingCodeService.updateRefRankingCode(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-refrankingcode']);
        },
        error => {
          alert(error);
        });
  }
}
