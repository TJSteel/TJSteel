import { Component, OnInit } from '@angular/core';
import { OnlineRacingManagerService } from 'src/app/services/online-racing-manager.service';
import { User } from 'src/app/interfaces/onlineRacingManager';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  userCount: number = 0;
  sites = [{
    title: 'Online Racing Manager',
    subtitle: 'Application created for The Online Racing Association',
    logoImageSrc: 'ORM_Logo.png',
    logoImageAlt: 'ORM Logo',
    imageSrc: 'ORM.png',
    imageAlt: 'ORM Site Preview',
    description: this.getORMDescription(),
    link: 'https://online-racing-manager.herokuapp.com/'
  }];

  games = [{
    title: 'The Hair Quest',
    subtitle: 'Created for the GitHub Game Off 2019',
    logoImageSrc: 'Perpetual_Motion_Logo.png',
    logoImageAlt: 'Perpetual Motion Logo',
    imageSrc: 'HairQuest.png',
    imageAlt: 'Hair Quest Preview',
    description: 'You play physicist Dr. Rex "Baldy" Garibaldi on a dimension-hopping adventure to recover his beloved hairpiece, lost in a perilous journey to a hostile alternate universe!',
    link: 'https://itch.io/jam/game-off-2019/rate/526626'
  },{
    title: 'Comet Smash',
    subtitle: 'Created for the 2-Buttons Jam 2019',
    logoImageSrc: 'Perpetual_Motion_Logo.png',
    logoImageAlt: 'Perpetual Motion Logo',
    imageSrc: 'CometSmash.png',
    imageAlt: 'Comet Smash Preview',
    description: 'This is a game where you try to eat up things smaller than you, hit something too big and you\'ll take damage, collect 100 items to win',
    link: 'https://itch.io/jam/2-buttons-jam-2019/rate/535871'
  }];

  constructor(private ormService: OnlineRacingManagerService) { }

  ngOnInit(): void {
    this.ormService.getAllUsers().subscribe((users: User[]) => {
      if (users) {
        this.userCount = users.length;
        this.sites[0].description = this.getORMDescription();
      }
    });
  }

  getORMDescription(): string {
    return `A site created to automate the process of online race management\nThere are currently ${this.userCount} members`;
  }
}
