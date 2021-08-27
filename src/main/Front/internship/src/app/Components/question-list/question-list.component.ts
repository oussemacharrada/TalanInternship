import { Component, Inject, OnInit , ViewChild } from '@angular/core';

import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { faPaperclip} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Category } from './../Category/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
 
  @ViewChild("fileUpload", {static: false}) fileUpload : any;
  fileName:any;
 
  
ElementRef : any;
files= [];  


term:any;


description :any;
faPaperclip=faPaperclip;
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

  public categorys : Category[] | undefined; 

  
  selectedValue: string|undefined;
  question={
    category :'',
    description:'',
    published: false
  };
  submitted = false;

 
  message = '';


  constructor(private questionService: QuestionService ,private route: ActivatedRoute,
    private router: Router,private CategoryService: CategoryService ) { 
    
  }

  ngOnInit(): void {
    this.retrieveQuestions();
    this.getQuestion(this.route.snapshot.params.id);
    
    this.selectQuestion(this.route.snapshot.params.id);

    this.getCategorys();

    
   
    
    
  }
  removemodal(){
    $(".modal-backdrop").remove();
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
          console.log('getbyid',this.currentQuestion);
        },
        error => {
          console.log(error);
        });
  }
  selectQuestion(id: any): void {
    this.questionService.get(id)
      .subscribe(
        data => {
          this.currentQuestion= data;
          console.log('select question', data);
        
        });
         
  }
  updateQuestion1(){
    
    this.questionService.update(this.currentQuestion)
      .subscribe(
        response => {
          
          Swal.fire({
       
            text: 'Votre message a été bien modifié',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'ok!',
           
          })
          this.retrieveQuestions();
        
          
        });
        
        
    }
  deleteQuestion(id: any){
    this.questionService.delete(id).subscribe( data => {
      console.log(data);
      this.getQuestion(id);
      Swal.fire({
       
        text: 'Votre message a été supprimé avec succé',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'ok!',
       
      })
      this.retrieveQuestions();
    })
  }

  searchDescription(): void {
    this.currentQuestion= {};
    this.currentIndex = -1;

    this.questionService.findByDescription(this.description)
      .subscribe(
        data => {
          this.questions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
 
  onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
      this.fileName = file.name +" is uploaded"
     
    
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
}
private uploadFiles() {  
  this.fileUpload.nativeElement.value = '';  
  this.files.forEach(file => {  
    this.uploadFile(file);  
  });  
}
uploadFile(file : any) {  
  const formData = new FormData();  
  formData.append('file', file.data);  
  file.inProgress = true;  
  this.questionService.upload(formData).subscribe(
    rsp => {
      console.log(rsp.type)


     
},
    error => {
      console.log(error)
    });

}




    

      
  
}

