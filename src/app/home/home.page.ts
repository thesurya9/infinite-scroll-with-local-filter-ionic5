import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  usersList = [{
    name: 'Surya',
    job: 'Software Developer',
    id: '988978',
    image: 'https://suryaprakashchaturvedi.github.io/assets/images/profile.jpg'
  },
  {
    name: 'Nikita',
    job: 'Contact Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Test',
    job: 'test Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },
  {
    name: 'Mac',
    job: 'Mac Developer',
    id: '988978',
    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  },];


  constructor() {
    //console.log(this.usersList);
  }


  loadData(event) {
    console.log("load data called");
    let newData = {
      name: 'Surya',
      job: 'Software Developer',
      id: '988978',
      image: 'https://suryaprakashchaturvedi.github.io/assets/images/profile.jpg'
    }

    for (let i = 0; i < 20; i++) {
      this.usersList.push(newData);
    }


    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.usersList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }


}
