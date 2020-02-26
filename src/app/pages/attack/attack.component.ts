import { Component, OnInit } from '@angular/core';
import {Course} from './attack.model';
import {User} from '../membership/membership.model';
import {AttackService} from './attack.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  // public CourseItems: Array<any>;
  public courses: Course[];
  public course: Course;
  public form: FormGroup;
  public modalRef: NgbModalRef;


  constructor(public courseService: AttackService,
              public fb: FormBuilder,
              public toastrService: ToastrService) { }

  ngOnInit() {
      this.getCourses();
      this.form = this.fb.group({
          id: null,
          name: null,
          author: null,
          creater: null,
          picture: null,
          score: null,
          courseIds: null
      });
  }

    public getCourses(): void {
        this.courseService.getCourses().subscribe( courses =>
            this.courses = courses
        );
    }

    public addCourse(course: Course) {
        this.courseService.addCourse(course).subscribe(result => {
            this.getCourses();
        });
    }

    public updateCourse(course: Course) {
        this.courseService.updateCourse(course).subscribe(result => {
            this.getCourses();
        });
    }

    public deleteCourse(course: Course){
        this.courseService.deleteCourse(course.id).subscribe(result =>
            this.getCourses()
        );
    }

    // 这个本意是开放用来进行课程内容详情的展示的，后需根据业务需要来开发
    public assignMenuItemsToCourse(course) {
        this.updateCourse(course);
        sessionStorage.setItem('courseMenuItems', JSON.stringify(course.courseIds));
        this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
    }


    public onSubmit(course: Course): void {
        if (this.form.valid) {
            if (course.id) {
                this.updateCourse(course);
            } else {
                this.addCourse(course);
            }
            this.modalRef.close();
        }
    }

}
