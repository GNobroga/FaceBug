import { ChangeDetectionStrategy, Component } from '@angular/core';
import fadeInAnimation from 'animations/fadeInAnimation';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-photo-gallery-item',
  templateUrl: './photo-gallery-item.component.html',
  styleUrl: './photo-gallery-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation],
})
export class PhotoGalleryItemComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Deletar foto',
      icon: 'pi pi-trash',
    },
    {
      label: 'Baixar',
      icon: 'pi pi-download',
    },
    {
      label: 'Tornar foto de perfil',
      icon: 'pi pi-user',
    }
  ];
}
