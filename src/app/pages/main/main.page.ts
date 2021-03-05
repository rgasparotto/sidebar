import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/main/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/main/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/main/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/main/Archived', icon: 'archive' },
    { title: 'Trash', url: '/main/Trash', icon: 'trash' },
    { title: 'Spam', url: '/main/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  ngOnInit() {
  }

}
