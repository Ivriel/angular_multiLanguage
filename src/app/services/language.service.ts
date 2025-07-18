import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>(localStorage.getItem('lang') || 'en')
  language$ = this.currentLang.asObservable()
  
  setLanguage(lang:string){
    this.currentLang.next(lang)
    localStorage.setItem('lang',lang)
  }

  get currentLanguage():string{
    return this.currentLang.value
  }
  
}
