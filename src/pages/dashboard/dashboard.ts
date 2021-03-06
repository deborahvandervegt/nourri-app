import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
 
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  nutritionItems: FirebaseListObservable<any[]>;
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.nutritionItems = this.firebaseProvider.getNutritionItems() ;
  }
}