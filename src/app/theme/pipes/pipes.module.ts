import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import {CourseSearchPipe} from './search/course-search.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        CourseSearchPipe
    ],
    exports: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        CourseSearchPipe
    ]
})
export class PipesModule { }
