import { Component, Inject, OnInit } from '@angular/core';

import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Category } from './../Category/category';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  public categorys : Category[] | undefined; 

  
  selectedValue: string|undefined;
 

  

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faComment=faComment;
  faUserCircle=faUserCircle;
  questions?: Question[];
  
  currentIndex = -1;
  category = '';
  currentQuestion: Question = {
    category: '',
    description: '',
    published: false
  };

  question={
    category :'',
    description:'',
    published: false
  };
  submitted = false;

  
  message = '';

  constructor(private questionService: QuestionService ,private route: ActivatedRoute,
    private router: Router ,private CategoryService: CategoryService) { 
    
  }

  ngOnInit(): void {
    this.retrieveQuestions();
    this.getQuestion(this.route.snapshot.params.id);
    
    this.updateQuestion(this.route.snapshot.params.id);
    this.getCategorys();
  }
  public getCategorys(): void {
    this.CategoryService.getCategorys().subscribe(
      (response: Category[]) => {
        this.categorys = response;
        console.log(this.categorys);
      },
    
    );
  }
  retrieveQuestions(): void {
    this.questionService.getAll()
      .subscribe(
        data => {
          this.questions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 
  

  saveQuestion():void{
    const data = {
      category: this.question.category,
      description: this.question.description
    };
    console.log("dataaa");

    console.log(data);
    this.questionService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.retrieveQuestions();
      },
      error => {
        console.log(error);
      });
      

  }
  newQuestion(): void {
    this.submitted = false;
    this.question = {
      category:'',
      description:'',
      published:false
    }
  };
  getQuestion(id: any): void {
    this.questionService.get(id)
      .subscribe(
        data => {
          this.currentQuestion = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateQuestion(id: any): void {
    this.questionService.get(id)
      .subscribe(
        data => {
          this.question = data;
          this.retrieveQuestions(); 
        },
        error => {
          console.error(error);
        });
         
  }
  saveQuestion1(){
    
    this.questionService.update(this.currentQuestion.id, this.question)
      .subscribe(
        response => {
          
          alert('question modifiée');
          this.retrieveQuestions();
        },
        error => {
          console.error(error);
          
        });
        
        
    }
  deleteQuestion(id: any){
    this.questionService.delete(id).subscribe( data => {
      console.log(data);
      this.getQuestion(id);
      alert('question supprimée');
      this.retrieveQuestions();
    })
  }
  
 
  
    

      
  
}