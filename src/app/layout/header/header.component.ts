import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
toggleTheme(){
  const currentTheme = document.body.className;
  document.body.className = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
}
}
