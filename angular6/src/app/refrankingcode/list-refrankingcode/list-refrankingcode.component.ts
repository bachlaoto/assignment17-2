import {Component, OnInit} from '@angular/core';
import {RefRankingCode} from '../../model/refRankingCode.model';
import {Router} from '@angular/router';
import {RefRankingCodeService} from '../../service/refRankingCode.service';

@Component({
  selector: 'app-list-refrankingcode',
  templateUrl: './list-refrankingcode.component.html',
  styleUrls: ['./list-refrankingcode.component.css']
})
export class ListRefRankingCodeComponent implements OnInit {
  refRankingCodes: RefRankingCode[];

  constructor(private router: Router, private refRankingCodeService: RefRankingCodeService) {

  }

  ngOnInit() {
    // if ( sessionStorage.getItem('loginok') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.refRankingCodeService.getRefRankingCode()
    //     .subscribe(data => {
    //       this.refRankingCodes = data;
    //     });
    // }
    if (sessionStorage.getItem('loginok') == null) {
      this.router.navigate(['']);
    }
    this.refRankingCodeService.getRefRankingCode()
      .subscribe(data => {
        this.refRankingCodes = data;
      });

  }

  deleteRefRankingCode(refRankingCode: RefRankingCode): void {
    this.refRankingCodeService.deleteRefRankingCode(refRankingCode.rankingCode)
      .subscribe(data => {
        this.refRankingCodes = this.refRankingCodes.filter(u => u !== refRankingCode);
      });
  }

  editRefRankingCode(refRankingCode: RefRankingCode): void {
    localStorage.removeItem('editRefRankingCodeId');
    localStorage.setItem('editRefRankingCodeId', refRankingCode.rankingCode.toString());
    this.router.navigate(['edit-refrankingcode']);
  }


}
