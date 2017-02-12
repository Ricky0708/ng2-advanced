import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.type = params['type'];
      console.log('Matrix: ' + params['name']);
    });

    this.route.queryParams.subscribe( params => {
      console.log('QueryString: ' + params['name']);
    })
  }

  goCards(type) {
    this.router.navigateByUrl('/cards/' + type);
  }

}
