import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment.prod";
import { Router } from "@angular/router";
import { IonInput } from "@ionic/angular";
import {ToastService} from "../toast/toast.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  constructor(public router: Router, private toast: ToastService) {
    // Vérifier si l'utilisateur est déjà connecté au chargement du service
    this.isLogged = !!localStorage.getItem('isLogged');
  }

  login(username: IonInput, password: IonInput) {
    if (username.value == environment.user_name) {
      if (password.value == environment.user_password) {
        this.isLogged = true;
        // Sauvegarder l'état de connexion dans localStorage
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['app']).then(()=>{
          const pos = 'middle'
          const message= 'Welcome !'
          this.toast.SuccessToast(pos, message).then()
        });
      } else {
        this.isLogged = false;
        const pos = 'middle'
        const message= 'Error : Bad Password !'
        this.toast.ErrorToast(pos, message).then()
      }
    } else {
      this.isLogged = false;
      console.log('bad username');
      const pos = 'middle'
      const message= 'Error : Bad Username !'
      this.toast.ErrorToast(pos, message).then()
    }
  }
  UserLogged(){
    if(localStorage.getItem('isLogged')){
      const isLogged = localStorage.getItem('isLogged')
      if(isLogged){
        return true
      }else{
        return false
      }
    }else{
      return  false
    }
  }
  logout() {
    // Supprimer l'état de connexion du localStorage
    localStorage.removeItem('isLogged');
    this.router.navigate(['auth']).then();
    const pos = 'middle'
    const message= 'Bye !'
    this.toast.SuccessToast(pos, message).then()
    this.isLogged = false;
  }
}
