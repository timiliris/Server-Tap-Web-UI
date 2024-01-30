import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
    menuNav: string = 'dashboard'
  constructor() { }

  Nav(component: string){
      this.menuNav = component
  }
}
