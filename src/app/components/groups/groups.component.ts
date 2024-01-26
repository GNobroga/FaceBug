import { Component } from '@angular/core';
import { GroupComponent } from './group/group.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [GroupComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {

}
