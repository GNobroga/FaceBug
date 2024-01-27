import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, InputTextModule, RadioButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {
  name = ''
}
