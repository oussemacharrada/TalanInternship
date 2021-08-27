import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './Components/Category/category.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { DataTablesModule } from 'angular-datatables';
import { NotfoundComponent } from './notfound/notfound.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Ng7BootstrapBreadcrumbModule} from "ng7-bootstrap-breadcrumb";

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuestionFormComponent } from './Components/question-form/question-form.component';
import { QuestionListComponent } from './Components/question-list/question-list.component';

import {MatTabsModule} from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { CategoryOverViewComponent } from './category-over-view/category-over-view.component';
import { ThreadOverViewComponent } from './thread-over-view/thread-over-view.component';
import { QuestionOverViewComponent } from './question-over-view/question-over-view.component';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionListComponent,
    QuestionFormComponent,
    RootNavComponent,
    NotfoundComponent,
    HomeComponent,
    CategoryOverViewComponent,
    ThreadOverViewComponent,
    QuestionOverViewComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
CommonModule,
FormsModule,
BrowserAnimationsModule,
MatToolbarModule,
MatSidenavModule,
MatButtonModule,
MatIconModule,
MatDividerModule,
LayoutModule,
MatListModule,


DataTablesModule,  
ReactiveFormsModule,
FontAwesomeModule,


MatFormFieldModule,
MatInputModule,
MatCardModule,
MatGridListModule,
MatSelectModule,
MatTableModule,
MatPaginatorModule,
Ng2SearchPipeModule,
Ng7BootstrapBreadcrumbModule,
MatTabsModule


  ],
  
  providers: [],
  bootstrap: [AppComponent,CategoryComponent,QuestionFormComponent,QuestionListComponent]
})
export class AppModule { }
