import { Component, signal } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  openSearchInput = signal(false);

  toggleSearchInput() {
    this.openSearchInput.set(!this.openSearchInput());
  }
}
