import { Injectable } from '@angular/core';
import { Location } from "./location";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationsCollection: AngularFirestoreCollection<Location>;
  locations: Observable<Location[]>;

  constructor(public afs: AngularFirestore) {
    this.locationsCollection = this.afs.collection('locations', ref => ref.orderBy('locationName','asc'));
  
    this.locations = this.afs.collection('locations').snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as Location;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getLocation() {
    return this.locations;
  }
}