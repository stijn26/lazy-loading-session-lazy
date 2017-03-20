import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit, OnDestroy {
  private subscriptionArr: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptionArr.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
