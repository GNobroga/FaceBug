import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleryComponent } from './gallery/gallery.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { SkeletonModule } from 'primeng/skeleton';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    ProfileHeaderComponent,
    GalleryComponent,
    FriendsComponent,
    FriendComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    SkeletonModule
  ],
  exports: [
    ProfileHeaderComponent,
    FriendsComponent,
    GalleryComponent,
  ]
})
export class ProfileModule { }
