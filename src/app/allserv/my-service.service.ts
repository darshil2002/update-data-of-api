import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
 
  items: any[] | undefined;
  url = 'http://localhost:3000/myNotes';
  Mysore: any;

  constructor(private http: HttpClient) {}

  saveData(myData: string): Observable<any> {
    return this.http.post(this.url, { myData: myData, checkboxValue: false });
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  updateValue(id: number, value: boolean, myData: string) {
   
    return this.http.put(`http://localhost:3000/myNotes/${id}`,{checkboxValue:value,myData:myData});
  }
}
