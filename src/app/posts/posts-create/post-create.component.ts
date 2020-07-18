import { Component } from '@angular/core';

import { Post } from '../posts.model';
import { PostsService } from '../posts.service';
import { NgForm } from '@angular/forms';

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.scss']

})
export class PostCreateComponent {
    constructor(public postService:PostsService){}
    
    onAddPost(form:NgForm){
        if(form.invalid){
            return;
        }
        const post:Post ={
            id:null,
            title:form.value.title,
            content:form.value.content
        };
        this.postService.addPost(post.title,post.content);
        form.resetForm();
    }
}