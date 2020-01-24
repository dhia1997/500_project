import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  results = 'no notification';
  socket: any;
  constructor(private nativeAudio: NativeAudio, private platform: Platform) {
    this.socket = io('http://localhost:4001');
    // Socket receiving method
    this.socket.on('_5_0_0_E_R_R_O_R', msg => {
      // this.nativeAudio.play('uniqueId1').then(
      //   () => {
      //     console.log('aler is running theres a 500 ERROR, attention please');
      //   },
      //   () => {
      //     console.log('ERROR in our side not ennemies side');
      //   }
      // );
      console.log('a notification coming so a 500 a dumping');
      console.log(msg);
    });
  }
  ionViewDidLoad() {
    // this.platform.ready().then(() => {
    //   // this.nativeAudio
    //   //   .preloadComplex('uniqueKey1', 'assets/audio/merhaba.mp3', 1, 1, 0)
    //   //   .then(() => {
    //   //     this.nativeAudio.play('uniqueKey1');
    //   //   });
    //   this.nativeAudio
    //     .preloadComplex('uniqueId1', '../../assets/audio/500.mp3', 1, 1, 0)
    //     .then(
    //       () => {
    //         console.log('will be running as long as theres 500 error');
    //       },
    //       () => {
    //         console.log('error in preloading audio file');
    //       }
    //     );
    // });
  }
}
