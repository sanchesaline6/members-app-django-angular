import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './Member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'members/');
  }
}
