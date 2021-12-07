import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './component/home/home.component';
import { ArticleCreateComponent } from './component/article-create/article-create.component';
import { ArticleViewComponent } from './component/article-view/article-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { DatatableListComponent } from './component/datatable-list/datatable-list.component';
import { DataTableMdComponent } from './component/data-table-md/data-table-md.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleCreateComponent,
    ArticleViewComponent,
    NavbarComponent,
    ArticleListComponent,
    DatatableListComponent,
    DataTableMdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
