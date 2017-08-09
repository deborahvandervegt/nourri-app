import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getNutritionItems() {
    return this.afd.list('/nutritionItems/');
  }
 
  addItem(name) {
    this.afd.list('/nutritionItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/nutritionItems/').remove(id);
  }
}