import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StopInfo} from '../shared/model/stopInfo.model';
import {OrderPipe} from 'ngx-order-pipe';
import {DepartureTime} from '../shared/model/departureTime.model';
import {JsonService} from '../shared/service/json.service';
import {ApiMyttcService} from '../shared/service/api-myttc.service';


@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StopComponent implements OnInit {

  id: string;
  stop_time: DepartureTime;
  time: string = 'stop_times.departureTime';
  reverse: boolean = false;
  sortedCollection: any[];


  stopInfo: StopInfo;


  constructor(private idNumber: ActivatedRoute, private apiMyttcService: ApiMyttcService, private jsonService: JsonService,
              private orderPipe: OrderPipe) {
    idNumber.params.subscribe((p) => {
      this.id = p.id;
    });
    this.sortedCollection = orderPipe.transform(this.stop_time, 'departureTime');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
    this.getAllRoute(this.id);
  }


  getAllRoute(id: string) {
    this.apiMyttcService.getAllRoute(id).subscribe((data) => {
      this.stopInfo = this.jsonService.jsonChanges(data);
      console.log(this.stopInfo);
    });
  }
}
