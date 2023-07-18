import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  // @ViewChild('bottom')
  // public bottom!: ElementRef;

  // public bootomstruc():void {
  //     setImmediate(() => {
  //         this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  //     });
  // }
}
