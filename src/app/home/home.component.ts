import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StopId} from '../shared/model/stopId.midel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected stopId = StopId;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSearch(id: StopId) {
    this.router.navigate(['stop', id.id]);
  }
}
