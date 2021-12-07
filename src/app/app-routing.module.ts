import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCreateComponent } from './component/article-create/article-create.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleViewComponent } from './component/article-view/article-view.component';
import { DataTableMdComponent } from './component/data-table-md/data-table-md.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'view/:id', component: ArticleViewComponent },
  { path: 'article-create', component: ArticleCreateComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'data-table-md', component: DataTableMdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
