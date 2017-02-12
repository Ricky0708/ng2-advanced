import { OnDestroy, Component,  OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit, OnDestroy {

  username: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  parentParams$: Subscription;

  ngOnInit() {
    this.parentParams$ = this.route.parent.params.subscribe(params => {
      console.log(params['username']);
    });

    // 透過 this.route.snapshot.parent 也可以直接取得上層路由參數
    this.route.snapshot.parent.params['username'];
  }

  ngOnDestroy() {
    this.parentParams$.unsubscribe();
  }
}
