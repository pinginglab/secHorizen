import { InMemoryDbService } from 'angular-in-memory-web-api';
export class AttackData implements InMemoryDbService {
    createDb() {
        const courses = [
            {
                id: "1",
                name: "渗透训练1",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/ashley.jpg",
                score: "5星好评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            },
            {
                id: "2",
                name: "渗透训练2",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/julia.jpg",
                score: "差评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            },
            {
                id: "3",
                name: "渗透训练2",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/julia.jpg",
                score: "差评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            },
            {
                id: "4",
                name: "渗透训练2",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/julia.jpg",
                score: "差评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            },
            {
                id: "5",
                name: "渗透训练2",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/julia.jpg",
                score: "差评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            },
            {
                id: "6",
                name: "渗透训练2",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/julia.jpg",
                score: "差评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            },
            {
                id: "7",
                name: "渗透训练2",
                author: "yerik",
                builder: "yerik",
                image: "assets/img/profile/julia.jpg",
                score: "差评",
                courseIds: [],
                latestDate: "2020-02-26T16:20:20.511Z"
            }
        ];
        return courses;
    }
}
