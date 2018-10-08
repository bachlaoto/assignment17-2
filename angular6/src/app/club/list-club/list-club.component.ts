import { Component, OnInit } from '@angular/core';
import {Club} from '../../model/club.model';
import {Router} from '@angular/router';
import {ClubService} from '../../service/club.service';

@Component({
  selector: 'app-list-club',
  templateUrl: './list-club.component.html',
  styleUrls: ['./list-club.component.css']
})
export class ListClubComponent implements OnInit {
  clubs: Club[];
  constructor(private router: Router, private clubService: ClubService) {

  }

  ngOnInit() {
    // if ( sessionStorage.getItem('loginok') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.clubService.getClub()
    //     .subscribe(data => {
    //       this.clubs = data;
    //     });
    // }
    if (sessionStorage.getItem('loginok') == null) {
      this.router.navigate(['']);
    }
    this.clubService.getClub()
      .subscribe(data => {
        this.clubs = data;
      });

  }

  deleteClub(club: Club): void {
    this.clubService.deleteClub(club.clubId)
      .subscribe(data => {
        this.clubs = this.clubs.filter(u => u !== club);
      });
  }

  editClub(club: Club): void {
    localStorage.removeItem('editClubId');
    localStorage.setItem('editClubId', club.clubId.toString());
    this.router.navigate(['edit-club']);
  }


}
