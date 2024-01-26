import { NgModule } from '@angular/core';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContentComponent } from './components/content/content.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { GroupComponent } from './components/group/group.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component.';
import NavItemComponent from './components/nav-item/nav-item.component';
import NavListComponent from './components/nav-list/nav-list.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import SidebarItem from './components/sidebar-item/sidebar-item.component';
import SidebarListComponent from './components/sidebar-list/sidebar-list.component';

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
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent,
    PostComponent,
    PostsComponent,
    SidebarComponent,
    SidebarItem,
    SidebarListComponent
  ],
  imports: [],
  exports: [
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
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent,
    PostComponent,
    PostsComponent,
    SidebarComponent,
    SidebarItem,
    SidebarListComponent
  ]
})
export default class PrincipalModule {

}
