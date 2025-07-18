import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { headerSectionLanguage } from '../../languages/header';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  lang:'en' | 'id' = 'en';
  text=headerSectionLanguage

  constructor(private languageService:LanguageService){}
  ngOnInit(): void {
      this.lang = this.languageService.currentLanguage as 'en'| 'id'
  }
  switchLanguage(){
    const newLang = this.lang === 'en'?'id':'en'
    this.languageService.setLanguage(newLang)
    this.lang = newLang
  }
}
