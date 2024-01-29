import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [ProfileHeaderComponent]
})
export class ProfileModule { }
