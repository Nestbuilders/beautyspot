import { Component,OnInit,HostListener, ViewChild ,ElementRef } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { enviroinment } from '../../enviroinments/enviroinment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  title = 'sl';
  selectall:boolean=false;
  showTemplate: boolean = false; 
  sample:any;
  checkedCategoryList:any=[];
  menulist:any=[];
  scrollPercentage: number = 0;
  phoneNumber=enviroinment.phoneNumber;
  telegram=enviroinment.telegram;
  message:string='Hi, I need your Apointment';
  isTooltipVisible = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollPercentage = (scrollOffset / windowHeight) * 100;
  }
  
  constructor(private servie:CommonServiceService){


  }
  ngOnInit(){
    this.servie.getmenus().subscribe(data=>{
      this.menulist = data;
    });
    const button = document.getElementById('myButton');
    console.log('button',button);
    setTimeout(() => {
      if (button) {
        console.log('pop up activated');
        button.click();
      }
  }, 10000);
  }

  console(data:string){
    alert(data);
  }
  whatsapp() {
    // Construct the WhatsApp URL with phone number and message
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;

    // Redirect to the WhatsApp URL
    window.open(whatsappUrl, '_blank');
  }

  Telegram() {
    // Construct the Telegram URL
    const telegramUrl = `https://t.me/${this.telegram}`;
    
    // Open the Telegram chat in a new tab
    window.open(telegramUrl, '_blank');
  }
  showTooltip() {
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }
}
