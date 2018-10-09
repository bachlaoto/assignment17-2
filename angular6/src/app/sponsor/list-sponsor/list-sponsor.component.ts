import {Component, OnInit} from '@angular/core';
import {Sponsor} from '../../model/sponsor.model';
import {Router} from '@angular/router';
import {SponsorService} from '../../service/sponsor.service';

@Component({
  selector: 'app-list-sponsor',
  templateUrl: './list-sponsor.component.html',
  styleUrls: ['./list-sponsor.component.css']
})
export class ListSponsorComponent implements OnInit {
  sponsors: Sponsor[];

  constructor(private router: Router, private sponsorService: SponsorService) {

  }

  ngOnInit() {
    // if ( sessionStorage.getItem('loginok') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.sponsorService.getSponsor()
    //     .subscribe(data => {
    //       this.sponsors = data;
    //     });
    // }
    if (sessionStorage.getItem('loginok') == null) {
      this.router.navigate(['']);
    }
    this.sponsorService.getSponsor()
      .subscribe(data => {
        this.sponsors = data;
      });

  }

  deleteSponsor(sponsor: Sponsor): void {
    this.sponsorService.deleteSponsor(sponsor.sponsorId)
      .subscribe(data => {
        this.sponsors = this.sponsors.filter(u => u !== sponsor);
      });
  }

  editSponsor(sponsor: Sponsor): void {
    localStorage.removeItem('editSponsorId');
    localStorage.setItem('editSponsorId', sponsor.sponsorId.toString());
    this.router.navigate(['edit-refrankingcode']);
  }


}
