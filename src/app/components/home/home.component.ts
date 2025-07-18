import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { homeSectionLanguage } from '../../languages/home';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  lang:'en'|'id' = 'id'
  text=homeSectionLanguage
  constructor(private languageService:LanguageService){}
  ngOnInit(): void {
    this.languageService.language$.subscribe(newLang => {
      this.lang = newLang as 'en' | 'id'
    })
  }
}
