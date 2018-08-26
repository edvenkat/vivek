import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  songList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.songList = [
        {"songTitle":"Thiruttu Payaley – Neenda Naal Song Lyrics in Tamil","songCreated":"நீண்ட நாள் ஆனதுநெஞ்சம்  ஊஞ்சல் ஆடுவான் நிலா  வந்ததும்மேகம் மெல்ல மூடுத்து அன்பே நீ…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/Thiruttu-Payaley-200x200.jpg","songView":"20","songComments":"3"},
            
        {"songTitle":"Thiruttu Payaley – Achukku Buchukku Song Lyrics in Tamil","songCreated":" போட எ ஸ்மைலி போடு ஸ்மைலியசுக்கு பூச்சுக்கு ஆல் ஸ்மைளேட்டோவுசுக்கும் இச்சுக்கும்நான் ஸ்மைலெய்செள்ள துளி…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/Thiruttu-Payaley-%E2%80%93-Nee-Paarkum-Song-Lyrics-in-Tamil-2-200x200.jpg","songView":"12","songComments":"30"},
            
        {"songTitle":"Thiruttu Payaley – Nee Paarkum Song Lyrics in Tamil","songCreated":"நீ பார்க்கும் பார்வை கண்ணோடு.. நீ சொல்லும் வார்த்தை நெஞ்சோடு.. உன்னாலே நானும் முன்போல…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/thirutupayale-2-800x441-200x200.jpg","songView":"9","songComments":"10"},
            
        {"songTitle":"Annadurai – GST Song Lyrics in Tamil","songCreated":" கிஸ்தி எ மாறி நீயும் என்ன வச்சி செய்யுற சொல்லாம கொள்ளாம வந்து என்னென்னமோ பண்ணுற  பூகம்பம்…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/annaturai.jpg2_-200x200.jpg","songView":"23","songComments":"7"},
            
        {"songTitle":"Annadurai – Thangama Vairama Song Lyrics in Tamil","songCreated":"தங்கமா வைரம என்ன சொல்ல  இவன் குணத்துக்கு ஏதும் ஈடு இல்ல சொந்தமா பந்தம் என்ன…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/annaturai-200x200.jpg","songView":"22","songComments":"9"},
            
        {"songTitle":"Veeraiyan – Pollaapayaley Song Lyrics in Tamil","songCreated":"பொல்லாப்பயலே எதிருல வந்தா எதுவும் புரியல ஹைய்யோ இதுதான் எதுவரை தெரியல உன்னால ஓயாம அல்லாடுறேன் உள்ள…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/veerayan-200x200.jpg","songView":"3","songComments":"19"},
            
        {"songTitle":"Veeraiyan –Pattachaaraayam Song Lyrics in Tamil","songCreated":"பட்டச்சாராயம் படைக்கவில்லே நேர்த்திக்கடன் வேண்டி பூஜைப்பன்னல்லே உனக்கு நேர்த்திக்கடன் வேண்டி பூஜைப்பன்னல்லே ஆடு கோழி எதுவும் காவு கொடுக்கல்லே…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/veeraiyan-20170103174753-15635.jpg13-200x200.jpg","songView":"2","songComments":"13"},
            
        {"songTitle":"Veeraiyan – Nee Medhuvaai Paricha Song Lyrics in Tamil","songCreated":" நீ மெதுவாய் பரிச்ச மனச திருப்பியும் தருவேனா ஒழுங்கா பார்த்துக்க கயிறுபோல் என்ன நீ…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/veeraiyan-20170103174753-15635.jpg12-200x159.jpg","songView":"2","songComments":"30"},
            
        {"songTitle":"Veeraiyan – Haiyo Haiyo Endraal Song Lyrics in Tamil","songCreated":"ஹய்யோ ஹய்யோ என்றால் இங்கே வீழும் பூதான் விழாமல் நிற்காதே…… மெய்யோ பொய்யோ முன்போல்தானே…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/veeraiyan-20170103174753-15635-200x200.jpg","songView":"4","songComments":"64"},
            
        {"songTitle":"Veeraiyan – Arsalaayitten Song Lyrics in Tamil","songCreated":"அர்சலாய்ட்டேன் மெர்சலாய்ட்டேன் இப்ப நானும் சோக்காய்ட்டேன் ஏன்டா மச்சான் என்னப்பாத்து பேசாமப்போற அழகான ஆத்திச்சூடி உஸ்சாரா உத்துப்படி…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2018/08/veerayan-200x200.jpg","songView":"7","songComments":"87"}
    
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  goToPage(pagename) {
        if(pagename=="details")
            this.navCtrl.push(DetailsPage);
    }

}
