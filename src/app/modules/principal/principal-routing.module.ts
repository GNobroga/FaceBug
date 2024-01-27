import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import CommentModelComponent from "@principal-components/comment-model/comment-model.component";

const routes: Routes = [
  {
    path: '',
    component: CommentModelComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class PrincipalRoutingModule {}
