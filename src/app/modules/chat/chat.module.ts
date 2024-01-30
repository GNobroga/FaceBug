import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessagerComponent } from './components/chat-messager/chat-messager.component';
import PrincipalModule from 'modules/principal/principal.module';
import SharedModule from 'modules/shared/shared.module';
import { ChatMessagerBodyComponent } from './components/chat-messager-body/chat-messager-body.component';

@NgModule({
  declarations: [
    ChatMessagerComponent,
    ChatMessagerBodyComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule,
    SharedModule
  ],
  exports: [
    PrincipalModule,
    SharedModule,
    ChatMessagerComponent,
    ChatMessagerBodyComponent,
  ]
})
export class ChatModule { }
