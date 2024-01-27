import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentBoxComponent } from '@principal-components/comment-box/comment-box.component';
import { CommentReactionComponent } from '@principal-components/comment-reaction/comment-reaction.component';
import { ContactComponent } from '@principal-components/contact/contact.component';
import { ContactsComponent } from '@principal-components/contacts/contacts.component';
import { ContentComponent } from '@principal-components/content/content.component';
import { CreatePostComponent } from '@principal-components/create-post/create-post.component';
import { FeedItemComponent } from '@principal-components/feed-item/feed-item.component';
import { FeedComponent } from '@principal-components/feed/feed.component';
import { GroupComponent } from '@principal-components/group/group.component';
import { GroupsComponent } from '@principal-components/groups/groups.component';
import { PostComponent } from '@principal-components/post/post.component';
import { PostsComponent } from '@principal-components/posts/posts.component';
import SidebarItem from '@principal-components/sidebar-item/sidebar-item.component';
import SidebarListComponent from '@principal-components/sidebar-list/sidebar-list.component';
import { SidebarComponent } from '@principal-components/sidebar/sidebar.component';
import { CommentModelComponent } from './components/comment-model/comment-model.component';
import SharedModule from 'modules/shared/shared.module';


@NgModule({
  declarations: [
    CommentBoxComponent,
    ContactComponent,
    ContactsComponent,
    ContactComponent,
    ContentComponent,
    CreatePostComponent,
    FeedComponent,
    FeedItemComponent,
    GroupComponent,
    GroupsComponent,
    PostComponent,
    PostsComponent,
    SidebarComponent,
    SidebarItem,
    SidebarListComponent,
    CommentReactionComponent,
    CommentModelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommentReactionComponent,
    CommentBoxComponent,
    ContactComponent,
    ContactsComponent,
    ContactComponent,
    ContentComponent,
    CreatePostComponent,
    FeedComponent,
    FeedItemComponent,
    GroupComponent,
    GroupsComponent,
    PostComponent,
    PostsComponent,
    SidebarComponent,
    SidebarItem,
    SidebarListComponent
  ]
})
export default class PrincipalModule {

}
