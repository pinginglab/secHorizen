export class Course {
    id: number;
    name: string;
    author: string;
    builder: string;
    image: string;
    score: string;
    courseIds: number[]; //  =>   for create ngModel multiselect
    latestDate: Date;
}
