import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotorPartsService {
  open(content: any, arg1: { ariaLabelledBy: string; }) {
    throw new Error('Method not implemented.');
  }

  url="http://localhost:3000/parts"
  constructor(private http:HttpClient) { }

  getParts(){
   return this.http.get(this.url);
  }

  addParts(data:any){
    return this.http.post(this.url,data)
  }

  deleteParts(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentParts(id: any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateCurrentParts(id: any,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
