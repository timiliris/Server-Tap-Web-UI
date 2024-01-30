import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }
  async SuccessToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      icon: 'checkmark-circle-outline',
      color: "success",
      position: position,
      translucent: true,
      animated: true,
    });
    await toast.present();
  }
  async ErrorToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      icon: 'close-circle-outline',
      position: position,
      color: "danger",
      translucent: true,
      animated: true,
    });
    await toast.present();
  }

}
