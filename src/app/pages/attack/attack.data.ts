import { InMemoryDbService } from 'angular-in-memory-web-api';
export class AttackData implements InMemoryDbService {
    createDb() {
        const courses = [
            {
                id: "1",
                name: "渗透训练1",
                author: "yerik",
                creater: "yerik",
                picture: "assets/img/profile/ashley.jpg",
                score: "5星好评",
                menuIds: []
            },
            {
                id: "2",
                name: "渗透训练2",
                author: "yerik",
                creater: "yerik",
                picture: "assets/img/profile/julia.jpg",
                score: "差评",
                menuIds: []
            }
        ];
        return courses;
    }
}