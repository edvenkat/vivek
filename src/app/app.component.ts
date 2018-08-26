import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Slides, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { DetailsPage } from '../pages/details/details';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  
  rootPage:any = HomePage;
  
  pages :Array<{id: number,title:any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
            {id: 1,title: "Home"},
            {id: 2,title: "Trending"},
            {id: 3,title: "Favourite"},
            {id: 4,title: "Actor"},
            {id: 5,title: "Actress"},
            {id: 6,title: "Movie"},
            {id: 7,title: "Music"},
            {id: 8,title: "Lyricist"},
            {id: 9,title: "Singer"},
            {id: 10,title: "Album Songs"}
        ];
  }
  openPage(page) {
     this.events.publish('slidechange:tabSelected', page);
  }
  
}

