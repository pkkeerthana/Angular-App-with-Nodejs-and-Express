import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-posts-list',
    templateUrl:'./posts-list.component.html',
    styleUrls:['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy{
   posts: Post[] = [];
   private postsSub: Subscription;

   constructor(public postService:PostsService){}

   ngOnInit() {
       this.postService.getPosts();
       this.postsSub = this.postService.getPostUpdateListener()
       .subscribe((posts:Post[]) => {
        this.posts = posts;
       });
   }
   ngOnDestroy(){
       this.postsSub.unsubscribe();
   }
}