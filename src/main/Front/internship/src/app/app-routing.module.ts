import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { CategoryComponent } from './Components/Category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { QuestionListComponent } from './Components/question-list/question-list.component';
import { QuestionFormComponent } from './Components/question-form/question-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThreadOverViewComponent } from './thread-over-view/thread-over-view.component';
import { QuestionOverViewComponent } from './question-over-view/question-over-view.component';
import { CategoryOverViewComponent } from './category-over-view/category-over-view.component';

const routes: Routes = [{path : 'category',component : CategoryComponent},
{path : 'home',component : HomeComponent},
{path: '404', component: NotfoundComponent},
{ path: 'questions', component: QuestionListComponent },
{ path: 'form', component: QuestionFormComponent },
{ path: 'threads', component: ThreadOverViewComponent },
{ path: 'question/:id', component: QuestionOverViewComponent },
{ path: 'category/:id', component: CategoryOverViewComponent },
{path: '**', redirectTo: '/404'}];

@NgModule({
  imports: [CommonModule, BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
