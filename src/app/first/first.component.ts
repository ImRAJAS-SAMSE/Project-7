import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  public message1: string = 'Initial text';

  public func() {
    this.message1 = 'Button is pressed';
  }
}
