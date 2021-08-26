import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Components/Category/category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   private apiServerUrl = environment.apiBaseUrl ;
  constructor(private http : HttpClient) { }
  
  public getCategorys(): Observable<any>{
    return this.http.get<Category>(`${this.apiServerUrl}/api/category/get-all-categorys`);
  }
  
  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiServerUrl}/api/category/create-categorys`, category);
  }

  public updateCategory(category: Category): Observable<Category> {
    let categoryId=category.id;
    return this.http.put<Category>(`${this.apiServerUrl}/api/category/update-categorys/${categoryId}`, category);
  }

  public deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/category/delete-categorys/${categoryId}`);
  }
}
