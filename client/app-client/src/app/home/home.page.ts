import { Component } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results = 'no notification';
  constructor() {}

}
