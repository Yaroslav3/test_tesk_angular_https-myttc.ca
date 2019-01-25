import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouteService} from '../shared/service/route.service';
import {ActivatedRoute} from '@angular/router';
import {StopSchedules} from '../shared/model/stopSchedules.model';
import {StopsName} from '../shared/model/stopsName.model';
import {OrderPipe} from 'ngx-order-pipe';
import {DepartureTime} from '../shared/model/stopTime.model';


@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StopComponent implements OnInit {

  id: string;
  stops: StopsName;
  routes: StopSchedules;
  stop_time: DepartureTime;
  time: string = 'stop_times.departure_time';
  reverse: boolean = false;
  sortedCollection: any[];

  constructor(private idNumber: ActivatedRoute, private routeService: RouteService, private orderPipe: OrderPipe) {
    idNumber.params.subscribe((p) => {
      this.id = p.id;
    });
    this.sortedCollection = orderPipe.transform(this.stop_time, 'departure_time');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
    this.getAllRoute(this.id);
  }


  getAllRoute(id: string) {
    this.routeService.getAllRoute(id).subscribe((data) => {
      this.stops = data.stops;
    });
  }

  setOrder(value: string) {
    if (this.time === value) {
      this.reverse = !this.reverse;
    }
    this.time = value;
  }
}
