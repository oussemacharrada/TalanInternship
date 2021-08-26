


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  question={
    category :'',
    description:'',
    published: false
  };
  submitted = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {

  }
  saveQuestion():void{
    const data = {
      category: this.question.category,
      description: this.question.description
    };
    this.questionService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
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

}
