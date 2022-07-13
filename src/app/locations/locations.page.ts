import { Component, OnInit } from '@angular/core';
import {Place} from '../model/place.model';
import {LocationsService} from '../services/locations.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:Array<Place>;
  constructor(private locationService:LocationsService,
              private router:Router,
              private alertCtrl:AlertController
              ) { }

  ngOnInit() {

  }
  //rafrachir la page pour prise en compte les nouvelles enregistrement
  ionViewWillEnter (){
    this.onGetLocations();
  }

  onNewLocation() {
    this.router.navigateByUrl("/menu/new-location");
  }

  async onRemove(p: Place) {
    const alert = await this.alertCtrl.create({

      message: 'Etes Vous Sûre ?',
      header: 'Confirmation',
      buttons: [
        {
          text: 'Oui',

          handler: () => {
            this.removeLocation(p);

          }
        },
        {
          text: 'Non',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();



  }

  private onGetLocations() {
    this.locationService.getLocations().then(data=>{
      this.locations=data;
    });
  }

  private removeLocation(p: Place) {
    let index=this.locations.indexOf(p);
    this.locations.splice(index,1);
    this.locationService.updateLocations(this.locations);
    
  }

  private onDetailLocation(p:Place) {
    this.locationService.currentLocation=p;
    this.router.navigateByUrl("/menu/location-details");
  }
}
