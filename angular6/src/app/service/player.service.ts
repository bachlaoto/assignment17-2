import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Player} from '../model/player.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlayerService {

  private playerUrl = 'http://localhost:8080/players';

  constructor(private http: HttpClient) {
  }

  // private playerUrl = '/api';

  public getPlayer() {
    return this.http.get<Player[]>(this.playerUrl + '/');
  }

  public deletePlayer(id: number) {
    return this.http.delete(this.playerUrl + '/' + id);
  }

  public createPlayer(player) {
    return this.http.post<Player>(this.playerUrl, player);
  }

  public getPlayerById(id: number) {
    return this.http.get<Player>(this.playerUrl + '/' + id);
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
  updatePlayer(player: Player) {
    return this.http.put(this.playerUrl, player);
  }
}
