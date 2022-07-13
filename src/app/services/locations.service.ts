import { Injectable } from '@angular/core';
import {Place} from '../model/place.model';
import  {Storage} from '@ionic/storage'


@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private locations:Array<Place>=[];
    public currentLocation: Place;

  constructor(private storage:Storage) {
    this.locations.push({title:":A"});
    this.locations.push({title:"B"});
    this.locations.push({title:"C"});
  }

  public getLocations(){
     return this.storage.get("locations").then(data => {
          this.locations=data!=null? data:[];
          return this.locations.slice();//une copie de cette liste
      });
  }

  public addLocation(place:Place) {
    this.locations.push(place);
    this.storage.set("locations",this.locations);


  }


    public updateLocations(locatations) {
        this.storage.set("locations",locatations);
    }
}
