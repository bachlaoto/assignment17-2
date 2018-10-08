import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {RefRankingCode} from '../model/refRankingCode.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RefRankingCodeService {

  private refRankingCodeUrl = 'http://localhost:8080/refRankingCodes';

  constructor(private http: HttpClient) {
  }

  // private refRankingCodeUrl = '/api';

  public getRefRankingCode() {
    return this.http.get<RefRankingCode[]>(this.refRankingCodeUrl + '/');
  }

  public deleteRefRankingCode(id: number) {
    return this.http.delete(this.refRankingCodeUrl + '/' + id);
  }

  public createRefRankingCode(refRankingCode) {
    return this.http.post<RefRankingCode>(this.refRankingCodeUrl, refRankingCode);
  }

  public getRefRankingCodeById(id: number) {
    return this.http.get<RefRankingCode>(this.refRankingCodeUrl + '/' + id);
  }

  // save(car: any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (car['href']) {
  //     result = this.http.put(car.href, car);
  //   } else {
  //     result = this.http.post(this.CAR_API, car);
  //   }
  //   return result;
  // }
  updateRefRankingCode(refRankingCode: RefRankingCode) {
    return this.http.put(this.refRankingCodeUrl, refRankingCode);
  }
}
