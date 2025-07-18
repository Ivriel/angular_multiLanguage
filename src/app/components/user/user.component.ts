import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { userSectionLanguage } from '../../languages/user';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  lang:'en'|'id' = "id"
  text = userSectionLanguage
  constructor(private languageService:LanguageService){}

  ngOnInit(): void {
      this.languageService.language$.subscribe(newLang => {
        this.lang = newLang as 'en' | 'id'
      })
  }
}
