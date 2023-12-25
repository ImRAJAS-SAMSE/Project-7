import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  public message1: string = 'Marvellous infosystem';

  public capitalize() {
    this.message1 = this.message1.toUpperCase();
  }

  public lowercase() {
    this.message1 = this.message1.toLowerCase();
  }
}
