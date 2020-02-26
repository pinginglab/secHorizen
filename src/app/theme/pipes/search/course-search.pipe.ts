import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CourseSearchPipe', pure: false })
export class CourseSearchPipe implements PipeTransform {
    transform(value, args?): Array<any> {
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(course => {
                if (course.name) {
                    return course.name.search(searchText) !== -1;
                } else {
                    return course.search(searchText) !== -1;
                }
            });
        }
    }
}