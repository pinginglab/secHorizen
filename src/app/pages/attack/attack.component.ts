import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from './attack.model';
import {AttackService} from './attack.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {MenuService} from '../../theme/components/menu/menu.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AttackService, MenuService]
})
export class AttackComponent implements OnInit {

    public menuItems: Array<any>;
    public courses: Course[];
    public course: Course;
    public form: FormGroup;
    public modalRef: NgbModalRef;
    public searchText: string;
    public type = 'grid';

    public menuSelectOptions: IMultiSelectOption[] = [];


    public menuSelectTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'menu item selected',
        checkedPlural: 'menu items selected',
        searchPlaceholder: 'Find menu item...',
        defaultTitle: 'Select menu items for user',
        allSelected: 'All selected',
  };

    public menuSelectSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-secondary btn-block',
        dynamicTitleMaxItems: 0,
        displayAllSelectedText: true,
        showCheckAll: true,
        showUncheckAll: true
    };



  constructor(public courseService: AttackService,
              public fb: FormBuilder,
              public toastrService: ToastrService,
              public menuService: MenuService,
              public modalService: NgbModal) {
      this.menuItems = this.menuService.getVerticalMenuItems();
      this.menuItems.forEach(item => {
          const menu = {
              id: item.id,
              name: item.title
          }
          this.menuSelectOptions.push(menu);
      });
  }

  ngOnInit() {
      this.getCourses();
      this.form = this.fb.group({
          id: null,
          name: null,
          author: null,
          builder: null,
          image: null,
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

    public deleteCourse(course: Course) {
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

    public openMenuAssign(event) {
        let parent = event.target.parentNode;
        while (parent) {
            parent = parent.parentNode;
            if (parent.classList.contains('content')) {
                parent.classList.add('flipped');
                parent.parentNode.parentNode.classList.add('z-index-1');
                break;
            }
        }
    }


    public openModal(modalContent, course) {
        if (course) {
            this.course = course;
            this.form.setValue(course);
            // this.genderOption = user.profile.gender;
        } else {
            this.course = new Course();
            // this.user.profile = new UserProfile();
            // this.user.work = new UserWork();
            // this.user.contacts = new UserContacts();
            // this.user.social = new UserSocial();
            // this.user.settings = new UserSettings();
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });

        this.modalRef.result.then((result) => {
            this.form.reset();
            // this.genderOption = null;
        }, (reason) => {
            this.form.reset();
            // this.genderOption = null;
        });
    }

    public closeMenuAssign(event) {
        let parent = event.target.parentNode;
        while (parent) {
            parent = parent.parentNode;
            if (parent.classList.contains('content')) {
                parent.classList.remove('flipped');
                parent.parentNode.parentNode.classList.remove('z-index-1');
                break;
            }
        }
    }


    // 这个是作为在线注册的功能，还没想好权限控制，暂时不放开
    // public assignMenuItemsToCoures(course) {
    //     this.updateCourse(course);
    //     sessionStorage.setItem('userMenuItems', JSON.stringify(course.courseIds));
    //     this.toastrService.success('Please, logout and login to see result.', 'Successfully add!');
    // }



}
