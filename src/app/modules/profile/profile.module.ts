import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleryComponent } from './gallery/gallery.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { SkeletonModule } from 'primeng/skeleton';
import { PhotoComponent } from './photo/photo.component';
import { PerfilComponent } from './perfil/perfil.component';
import PrincipalModule from 'modules/principal/principal.module';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FriendItemComponent } from './friend-item/friend-item.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoGalleryItemComponent } from './photo-gallery-item/photo-gallery-item.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MenuUploadComponent } from './menu-upload/menu-upload.component';
import { PhotoSuggestComponent } from './photo-suggest/photo-suggest.component';
import { PhotoSuggestItemComponent } from './photo-suggest/photo-suggest-item/photo-suggest-item.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProfileHeaderComponent,
    GalleryComponent,
    FriendsComponent,
    FriendComponent,
    PhotoComponent,
    PerfilComponent,
    SearchFriendsComponent,
    FriendItemComponent,
    PhotoGalleryComponent,
    PhotoGalleryItemComponent,
    VideoGalleryComponent,
    MenuUploadComponent,
    PhotoSuggestComponent,
    PhotoSuggestItemComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    SkeletonModule,
    PrincipalModule,
    FormsModule,
    InputTextModule,
    RouterModule,
    MenuModule,
    ImageCropperModule,
    ButtonModule
  ],
  exports: [
    ProfileHeaderComponent,
    FriendsComponent,
    GalleryComponent,
  ]
})
export class ProfileModule { }
