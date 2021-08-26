import { Component, OnInit } from '@angular/core';
import { Category } from './../Components/Category/category';
import { CategoryService } from '../services/category.service';
import { Question } from '../models/question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-question-over-view',
  templateUrl: './question-over-view.component.html',
  styleUrls: ['./question-over-view.component.css']
})
export class QuestionOverViewComponent implements OnInit {
  public categorys : Category[] | undefined; 

  
  selectedValue: string|undefined;
 

  

 
  questions?: Question[];
  public categoryid: any ;

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
    this.categoryid=this.route.snapshot.params.id;

    this.retrieveQuestions();
    this.getQuestion(this.route.snapshot.params.id);
    
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
 
  

}
