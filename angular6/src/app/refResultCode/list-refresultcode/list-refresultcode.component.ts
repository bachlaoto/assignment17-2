import {Component, OnInit} from '@angular/core';
import {RefResultCode} from '../../model/refResultCode.model';
import {Router} from '@angular/router';
import {RefResultCodeService} from '../../service/refResultCode.service';

@Component({
  selector: 'app-list-refrankingcode',
  templateUrl: './list-refresultcode.component.html',
  styleUrls: ['./list-refresultcode.component.css']
})
export class ListRefResultCodeComponent implements OnInit {
  refResultCodes: RefResultCode[];

  constructor(private router: Router, private refResultCodeService: RefResultCodeService) {

  }

  ngOnInit() {
    // if ( sessionStorage.getItem('loginok') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.refResultCodeService.getRefResultCode()
    //     .subscribe(data => {
    //       this.refResultCodes = data;
    //     });
    // }
    if (sessionStorage.getItem('loginok') == null) {
      this.router.navigate(['']);
    }
    this.refResultCodeService.getRefResultCode()
      .subscribe(data => {
        this.refResultCodes = data;
      });

  }

  deleteRefResultCode(refResultCode: RefResultCode): void {
    this.refResultCodeService.deleteRefResultCode(refResultCode.resultCode)
      .subscribe(data => {
        this.refResultCodes = this.refResultCodes.filter(u => u !== refResultCode);
      });
  }

  editRefResultCode(refResultCode: RefResultCode): void {
    localStorage.removeItem('editRefResultCodeId');
    localStorage.setItem('editRefResultCodeId', refResultCode.resultCode.toString());
    this.router.navigate(['edit-refresultcode']);
  }


}
