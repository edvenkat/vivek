import { Component, ViewChild  } from '@angular/core';
import { NavController, Platform, Slides, Events, FabContainer, Content  } from 'ionic-angular';


import { DetailsPage } from '../details/details';
import { ListPage } from '../list/list';
import { Search } from '../search/search';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('mySliderH') sliderh : Slides;
    @ViewChild('mySliderC') sliderc : Slides;
    @ViewChild(Content) content: Content;
    selectedSegment: any;
    slidersHeader: any;
    slidersContent: any;
    imageUrls: any;
    showRightButton = true;
    showLeftButton = true;
    fabMenuActive = false;
    
    //
    homeSongList : any;
    trendingSongList : any;
    favouriteSongList : any;
    actorList : any;
    actressList : any;
    movieList : any;
    musicList : any;
    lyricistList : any;
    singerList : any;
    albumSongList : any;
    
    //
    homelist : any;
    homeSliderHeight : any;
    //
    ngAfterViewInit() {
         this.sliderc.autoHeight = true;
     }
    

    constructor(public navCtrl: NavController,public events: Events) {
        this.events.subscribe('slidechange:tabSelected', eventData => { 
            const selectedIndex = this.slidersHeader.findIndex((slide) => {
                return slide.id === eventData;
            });
            this.sliderc.slideTo(selectedIndex);
            this.sliderh.slideTo(selectedIndex);
        });
        this.selectedSegment = { id: 1, title: "Home"};
        
 
        this.slidersHeader = [
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
        this.slidersContent = [
            {"sliderId":1,"sliderName":"Home"},
            {"sliderId":2,"sliderName":"Trending"},
            {"sliderId":3,"sliderName":"Favourite"},
            {"sliderId":4,"sliderName":"Actor"},
            {"sliderId":5,"sliderName":"Actress"},
            {"sliderId":6,"sliderName":"Movie"},
            {"sliderId":7,"sliderName":"Music"},
            {"sliderId":8,"sliderName":"Lyricist"},
            {"sliderId":9,"sliderName":"Singer"},
            {"sliderId":10,"sliderName":"Album Songs"}
        ];
        
        this.homeSongList = [
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
        
        
        this.trendingSongList = [
            {"songTitle":"Meendum Oru Kadhal Kadhai – Yedhedho Pennae Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/05/2-5-64x64.jpg",songView:""},
            {"songTitle":"Theri – En Jeevan Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/04/1-64x64.jpg",songView:""},
            {"songTitle":"Joker – Ennanga Sir Unga Sattam Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/04/1-6-64x64.jpg",songView:""},
            {"songTitle":"Parasakthi – Oh Rasikkum Seemane Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2017/04/hqdefault-64x64.jpg",songView:""},
            {"songTitle":"Manithan – Mun Sellada Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/05/5-2-64x64.jpg",songView:""}
        ];
        
        this.favouriteSongList = [
            {"songTitle":"Sethupathi – Konji Pesida Venaam Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/01/4-64x64.jpg",songView:"68,143"},
            {"songTitle":"Theri – En Jeevan Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/04/1-64x64.jpg",songView:"65,594"},
            {"songTitle":"Zero – Uyire Un Uyirena Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/02/1-8-64x64.jpg",songView:"38,559"},
            {"songTitle":"Pichaikkaran – Nooru Samigal Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/01/2-4-64x64.jpg",songView:"37,088"},
            {"songTitle":"Maruthu – Karuvakattu Karuvaaya Song Lyrics in Tamil",songImage:"http://www.lyricsintamil.com/wp-content/uploads/2016/05/3-10-64x64.jpg",songView:"36,289"}
        ];
        
        this.actorList = [
            {"key":"Arulnithi",name:"Arulnithi"},
            {"key":"Arya",name:"Arya"},
            {"key":"Atharvaa",name:"Atharvaa"},
            {"key":"Bobby Simha",name:"Bobby Simha"},
            {"key":"Jeyam Ravi",name:"Jeyam Ravi"},
            {"key":"Jiiva",name:"Jiiva"},
            {"key":"Kamal Hassan",name:"Kamal Hassan"},
            {"key":"Karthi",name:"Karthi"},
            {"key":"Karunakaran",name:"Karunakaran"},
            {"key":"Madhavan",name:"Madhavan"},
            {"key":"Nagarjuna Akkineni",name:"Nagarjuna Akkineni"},
            {"key":"Nivin Pauly",name:"Nivin Pauly"},
            {"key":"Sendrayan",name:"Sendrayan"},
            {"key":"Sibiraj",name:"Sibiraj"},
            {"key":"Siddharth",name:"Siddharth"},
            {"key":"Silambarasan",name:"Silambarasan"},
            {"key":"Udhayanithi Stalin",name:"Udhayanithi Stalin"},
            {"key":"Vaibhav",name:"Vaibhav"},
            {"key":"Vijay Antony",name:"Vijay Antony"},
            {"key":"Vijay Sethupathi",name:"Vijay Sethupathi"},
            {"key":"Vishal",name:"Vishal"}
        ];
        
        
         this.actressList = [
            {"key":"Aishwarya Rajesh",name:"Aishwarya Rajesh"},
            {"key":"Amy Jackson",name:"Amy Jackson"},
            {"key":"Andrea Jeremiah",name:"Andrea Jeremiah"},
            {"key":"Catherine Tresa",name:"Catherine Tresa"},
            {"key":"Hansika Motwani",name:"Hansika Motwani"},
            {"key":"Lakshmi Menon",name:"Lakshmi Menon"},
            {"key":"Madonna Sebastian",name:"Madonna Sebastian"},
            {"key":"Nayantara",name:"Nayantara"},
            {"key":"Oviya",name:"Oviya"},
            {"key":"Poonam Bajwa",name:"Poonam Bajwa"},
            {"key":"Raai Laxmi",name:"Raai Laxmi"},
            {"key":"Remya Nambeesan",name:"Remya Nambeesan"},
            {"key":"Samantha",name:"Samantha"},
            {"key":"Sri Divya",name:"Sri Divya"},
            {"key":"Tamannaah",name:"Tamannaah"},
            {"key":"Trisha",name:"Trisha"}
        ];
        
        this.movieList = [
            {"key":"Aagam",name:"Aagam"},
            {"key":"Aarathu Sinam",name:"Aarathu Sinam"},
            {"key":"Achcham Yenbadhu Madamaiyada",name:"Achcham Yenbadhu Madamaiyada"},
            {"key":"Aranmanai 2",name:"Aranmanai 2"},
            {"key":"Avalukena",name:"Avalukena"},
            {"key":"Aviyal",name:"Aviyal"},
            {"key":"Bangalore Naatkal",name:"Bangalore Naatkal"},
            {"key":"Darling 2",name:"Darling 2"},
            {"key":"Ennul Aayiram",name:"Ennul Aayiram"},
            {"key":"Gethu",name:"Gethu"},
            {"key":"Hello Naan Pei Pesuren",name:"Hello Naan Pei Pesuren"},
            {"key":"Idhu Namma Aalu",name:"Idhu Namma Aalu"},
            {"key":"Irudhi Suttru",name:"Irudhi Suttru"},
            {"key":"Jil Jung Juk",name:"Jil Jung Juk"},
            {"key":"Kadhalum Kadanthu Pogum",name:"Kadhalum Kadanthu Pogum"},
            {"key":"Kanithan",name:"Kanithan"}
        ];
        
        
         this.musicList = [
            {"key":"A. R. Rahman",name:"A. R. Rahman"},
            {"key":"Anirudh Ravichander",name:"Anirudh Ravichander"},
            {"key":"D. Imman",name:"D. Imman"},
            {"key":"Gopi sunder",name:"Gopi sunder"},
            {"key":"Harris Jayaraj",name:"Harris Jayaraj"},
            {"key":"Hiphop Tamizha",name:"Hiphop Tamizha"},
            {"key":"Ilaiyaraaja",name:"Ilaiyaraaja"},
            {"key":"Joahn",name:"Joahn"},
            {"key":"Nivas K Prsasanna",name:"Nivas K Prsasanna"},
            {"key":"Radhan",name:"Radhan"},
            {"key":"S. Thaman",name:"S. Thaman"},
            {"key":"Santhosh Narayanan",name:"Santhosh Narayanan"},
            {"key":"Siddharth Vipin",name:"Siddharth Vipin"},
            {"key":"Sivamani",name:"Sivamani"},
            {"key":"Vijay Antony",name:"Vijay Antony"},
            {"key":"Yuvan Shankar raja",name:"Yuvan Shankar raja"}
        ];
        
        
        this.lyricistList = [
            {"key":"A. R. Rahman",name:"A. R. Rahman"},
            {"key":"Arun Kamaraj",name:"Arun Kamaraj"},
            {"key":"Deeraj Vaidy",name:"Deeraj Vaidy"},
            {"key":"G Praba",name:"G Praba"},
            {"key":"Gana Vinoth",name:"Gana Vinoth"},
            {"key":"Hiphop Tamizha",name:"Hiphop Tamizha"},
            {"key":"Madhan Karky",name:"Madhan Karky"},
            {"key":"MC Vickey",name:"MC Vickey"},
            {"key":"Mohan Rajan",name:"Mohan Rajan"},
            {"key":"Muthamil",name:"Muthamil"},
            {"key":"Piraisoodan",name:"Piraisoodan"},
            {"key":"Prabha",name:"Prabha"},
            {"key":"Sirkali Sirpi",name:"Sirkali Sirpi"},
            {"key":"Thamarai",name:"Thamarai"},
            {"key":"V Padmavathy",name:"V Padmavathy"},
            {"key":"Vivek",name:"Vivek"}
        ];
        
        this.singerList = [
            {"key":"Baskar",name:"Baskar"},
            {"key":"Chinmayi",name:"Chinmayi"},
            {"key":"Chitra",name:"Chitra"},
            {"key":"Devan",name:"Devan"},
            {"key":"Dhee",name:"Dhee"},
            {"key":"Ebisa",name:"Ebisa"},
            {"key":"Haricharan",name:"Haricharan"},
            {"key":"Ilaiyaraaja",name:"Ilaiyaraaja"},
            {"key":"Jagadesh",name:"Jagadesh"},
            {"key":"Kalpana",name:"Kalpana"},
            {"key":"Karthik",name:"Karthik"},
            {"key":"Padmalatha",name:"Padmalatha"},
            {"key":"Padmalatha",name:"Padmalatha"},
            {"key":"Ranjith",name:"Ranjith"},
            {"key":"Rita",name:"Rita"}
        ];
        
        this.albumSongList = [
            {"songTitle":"Enadhazhage Album Song Lyrics in Tamil","songCreated":"எனதழகே நீ இல்லாமலே எதில் வாழுவேன் உனது இதயத் தீ இல்லாமலே எதில் வீழுவேன் இமைத்திடக் காத்துக்கிடக்கும் எதில் எந்தன் வாசல் அமைப்பேன் உன் பார்வை இல்லாமல்…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2017/03/hqdefault-3-200x200.jpg","songView":"527","songComments":"3"},
            
            {"songTitle":"Happy Birthday – Thala Anthem","songCreated":"தலை எடுக்கும் தல ஒன்னு தலை எடுக்கப் போகுதே தன்னம்பிக்கை தன்னடக்கம் தனி வழின்னு சீறுதே அதாராட்டம் உதாராட்டம் ஆலுமா டோலுமா அப்பன் இல்லாம அண்ணன் இல்லாம…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2016/08/Ajith-In-Veeram-First-Look-Pictures-2-200x200.jpg","songView":"392","songComments":"30"},
            
            {"songTitle":"Album Song – Thappa Pesathey Song Lyrics in Tamil","songCreated":"இந்த பொண்ணுங்களே இப்படித்தான் புரிஞ்சு போச்சுடா பொண்ணுங்கள தப்பா பேசாத மாமா மச்சி பொண்ணுங்கள தப்பா பேசாத பொண்ணுங்கள தப்பா பேசாத மாமா மச்சி பொண்ணுங்கள தப்பா…","songImage":"http://www.lyricsintamil.com/wp-content/uploads/2016/03/album-songs-200x200.jpg","songView":"487","songComments":"10"},
        ];
        
        
        
        
    }
    
    goToPage(pagename) {
        if(pagename=="details")
            this.navCtrl.push(DetailsPage);
        if(pagename=="list")
            this.navCtrl.push(ListPage);
    }
    getSearch(fab: FabContainer) {
        fab.close();
        this.fabMenuActive = false;
        this.navCtrl.push(Search);
    }
    fabMenuToggle() {
        console.log("came");
        this.fabMenuActive = !this.fabMenuActive;
    }
    claseFabMenu(fab: FabContainer) {
        fab.close();
         this.fabMenuActive = !this.fabMenuActive;
    }
    redirectionPage(pageName:String,fab: FabContainer) {
         console.log("page redirection");
        fab.close();
    }
    scrollToTop(slider) {
        this.content.scrollToTop();
        /*console.log("slide"+slider.getActiveIndex())
        if(slider.getActiveIndex()==1) {
            this.inifinteScrollForSlide1 = true;
            this.inifinteScrollForSlide2 = false;
        } else if(slider.getActiveIndex()==2) {
            this.inifinteScrollForSlide1 = false;
            this.inifinteScrollForSlide2 = true;
        } else {
            this.inifinteScrollForSlide1 = false;
            this.inifinteScrollForSlide2 = false;
        }*/
      }
    
    getMoreSongs(infiniteScroll?: any) {
        
        if(this.homelist!="") {
            this.homelist = document.getElementsByClassName("swiper-slide-active");
            console.log(this.homelist)
            this.homeSliderHeight = this.homelist[1].clientHeight
            console.log(this.homeSliderHeight)
        }
        
        var moreSongs = [
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
        ]
        
        
        for(let i=0;i<moreSongs.length;i++) {
            this.homeSongList.push(moreSongs[i]);
        }
        var list = document.getElementsByClassName("swiper-wrapper");
        console.log(list)
        console.log(list[1].clientHeight)
        list[1].style.height = (list[1].clientHeight + this.homeSliderHeight) + "px"
        //console.log(list)
        /*
        if(infiniteScroll) {
            setTimeout(function(){
                infiniteScroll.complete();
            },2000);
        }
        */
    }
    
	
    onHeaderSlideChanged(slider) {
       //const currentSlide = this.slidersContent[slider.getActiveIndex()];
      // this.selectedSegment = currentSlide.id;
       //this.sliderc.slideTo(currentSlide);
    }
    
    onContentSlideChanged(slider) {
        const currentSlide = this.slidersHeader[slider.getActiveIndex()];
        if(typeof(currentSlide)!="undefined") {
            this.selectedSegment = currentSlide;
            this.sliderh.slideTo(slider.getActiveIndex());
        }
        
    }
    
    onSegmentChanged(segmentButton) {
        const selectedIndex = this.slidersContent.findIndex((slide) => {
            return slide.sliderId === segmentButton.id;
        });
        this.sliderc.slideTo(selectedIndex);
    }
    
    slideNext() {
         this.sliderh.slideNext();
    }
    
    slidePrev() {
         this.sliderh.slidePrev();
    }
    resSearch() {
        this.navCtrl.push(DetailsPage);
    }
   
}
