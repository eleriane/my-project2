import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  title = 'Customer App';
  name = 'Bob';
  wardsColor = 'blue';
  customers = [
    { id: 1, name: 'Ward' },
  ];

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
  }
}

