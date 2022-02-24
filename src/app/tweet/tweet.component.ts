import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {

  tweet = {
    body: 'Some tweet about crypto currency',
    likes: 120,
    isLiked: false
  }

  onTweetLikedStatusChanged(status: boolean) {
    console.log('Tweet Like Status has been changed:', status)
  }


}
