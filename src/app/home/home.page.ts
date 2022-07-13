import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private contact={
    name:"Imad Fetian",
      email:"fetian.imad@gmail.com",
    logo: "assets/images/logo tangier.png",
    location:"assets/images/loc.png"
  }

  constructor() {}

}
