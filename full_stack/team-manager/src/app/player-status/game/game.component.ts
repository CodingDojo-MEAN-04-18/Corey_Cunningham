import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Player } from '../../manager-players/player';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players: Player[];
  game_num: number;
  game: string;
  constructor(private _route: ActivatedRoute, private _data: DataService) { }

  ngOnInit(){
    this._data.players.subscribe(data => this.players = data);
    this._route.paramMap.subscribe(params => {
      this.game_num = parseInt(params.get("id"))
      this.game = "game" + params.get("id");
    });
  }
  updateStatus(id: string,status: number): void{
    this._data.update_player(id,status,this.game);
  }

}
