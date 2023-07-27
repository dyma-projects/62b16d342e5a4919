import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public name: string = 'Pierre';

  public changeName() {
    if (this.name === 'Pierre') {
      this.name = 'Florine';
    } else {
      this.name = 'Pierre';
    }
  }

  public image: string =
    'https://cdn.pixabay.com/photo/2023/06/04/11/42/river-8039447_1280.jpg';
}
