import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.className = 'dark-theme';
  }

  changeTheme() {
    const currentTheme = this.document.body.className;
    this.document.body.className = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
  }
}
