import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Category } from './category';
import { CategoryService } from '../../services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup , Validators } from '@angular/forms';
@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

public  editc : boolean = false ;
 
  public categorys : Category[] | undefined; 
  public editcategory: Category | undefined;
  public deletecategory: Category | undefined;
  public datetime:Date = new Date('yyyy-MM-dd HH:mm:ss');
  closeResult = '';

  constructor(private CategoryService: CategoryService ,
    private modalService: NgbModal){}
  ngOnInit() {
    $(function(){
      $('#example').DataTable();
    });
    this.getCategorys();
  }
CategoryForm=new FormGroup({
  type: new FormControl('',Validators.required),
   title: new FormControl('',Validators.required),
   description: new FormControl('',Validators.required)
 })
 get type(){ return this.CategoryForm.get('type')}
 get title(){ return this.CategoryForm.get('title')}
 get description(){ return this.CategoryForm.get('description')}

  public getCategorys(): void {
    this.CategoryService.getCategorys().subscribe(
      (response: Category[]) => {
        this.categorys = response;
        console.log(this.categorys);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onAddCategory(addForm :any): void {
  
    document.getElementById('add-Category-form')?.click();

    console.log(addForm);
    this.CategoryService.addCategory(addForm.value).subscribe(
      (response: Category) => {
        console.log(response);
        this.getCategorys();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatCategory(category: Category): void {
    this.CategoryService.updateCategory(category).subscribe(
      (response: Category) => {
        console.log(response);
        this.getCategorys();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCategory(cateoryId: number): void {
    this.CategoryService.deleteCategory(cateoryId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCategorys();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCategory(key: string): void {
    console.log(key);
    const results: Category[] = [];
    if(this.categorys){
    for (const category of this.categorys   ) {
      if (category.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || category.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || category.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || category.createdBy.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(category);
      }
    }}
    this.categorys = results;
    if (results.length === 0 || !key) {
      this.getCategorys();
    }
  }


  EditMode(category: Category): void {
    if(!this.editc)
    this.editc=true;
    else{
    this.CategoryService.updateCategory(category).subscribe(
      (response: Category) => {
        console.log(response);
        this.getCategorys();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.editc=false;
    }
    console.log(this.editc);
  }
  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
}
}
