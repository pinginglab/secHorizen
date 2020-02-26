import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './attack.model';

@Injectable({
  providedIn: 'root'
})
export class AttackService {
    public url = 'api/courses';
    constructor(public http: HttpClient) { }

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.url);
    }

    // 从前端暂时不提供过多的更新api，后续根据需要逐步开发
    addCourse(course: Course) {
        return this.http.post(this.url, course);
    }

    updateCourse(course: Course) {
        return this.http.put(this.url, course);
    }

    deleteCourse(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

  // constructor() { }
}
