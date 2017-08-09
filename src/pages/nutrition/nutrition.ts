import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
 
@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html'
})
export class NutritionPage {
  nutritionItems: FirebaseListObservable<any[]>;
  newItem = '';
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.nutritionItems = this.firebaseProvider.getNutritionItems();
  }
 
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}