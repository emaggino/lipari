import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  constructor(private http: HttpClient) {}

  editRicetta(id: string, obj: any): Observable<any> {
    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application-json',
        Authorization:
          'bearer ' + JSON.parse(localStorage.getItem('accessToken') || ''),
      }),
    };
    return this.http.post(
      `http://localhost:8080/api/ricette/update/${id}`,
      obj
    );
  }
}
