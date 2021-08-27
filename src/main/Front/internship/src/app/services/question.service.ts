import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Question} from '../models/question.model';


const baseUrl = 'http://localhost:8082/api/questions';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
 
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Question): Observable<any> {
    return this.http.post(baseUrl, data);
  }

 
  update( data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${data.id}`, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByDescription(description: any): Observable<Question[]> {
    return this.http.get<Question[]>(`${baseUrl}?description=${description}`);
  }

  public upload(formData:any) {
    console.log("upload service function is called")
    console.log(formData)
    return this.http.post<FormData>(baseUrl, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  

  
}}