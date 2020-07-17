import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css']
})
export class SiteCardComponent implements OnInit {

  constructor() { }

  @Input() site: any;
  
  ngOnInit(): void {
  }
    
}
