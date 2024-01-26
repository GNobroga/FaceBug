import { NgModule } from '@angular/core';
import { CommentBoxComponent } from '@principal-components/comment-box/comment-box.component';
import { ContactComponent } from '@principal-components/contact/contact.component';
import { ContactsComponent } from '@principal-components/contacts/contacts.component';
import { ContentComponent } from '@principal-components/content/content.component';
import { CreatePostComponent } from '@principal-components/create-post/create-post.component';
import { FeedItemComponent } from '@principal-components/feed-item/feed-item.component';
import { FeedComponent } from '@principal-components/feed/feed.component';
import { GroupComponent } from '@principal-components/group/group.component';
import { GroupsComponent } from '@principal-components/groups/groups.component';
import { HeaderMenuComponent } from '@principal-components/header-menu/header-menu.component.';
import { HeaderComponent } from '@principal-components/header/header.component';
import NavItemComponent from '@principal-components/nav-item/nav-item.component';
import NavListComponent from '@principal-components/nav-list/nav-list.component';
import { PostComponent } from '@principal-components/post/post.component';
import { PostsComponent } from '@principal-components/posts/posts.component';
import SidebarItem from '@principal-components/sidebar-item/sidebar-item.component';
import SidebarListComponent from '@principal-components/sidebar-list/sidebar-list.component';
import { SidebarComponent } from '@principal-components/sidebar/sidebar.component';


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
