import {Component, OnInit} from '@angular/core';
import {RouteService} from '../shared/service/route.service';
import {ActivatedRoute} from '@angular/router';
import {Routes} from '../shared/model/routes.model';
import {Stops} from '../shared/model/stops.model';


@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit {

  id: string;
  stops: Stops;
  routes: Routes;


  constructor(private idNumber: ActivatedRoute, private routeService: RouteService) {
    idNumber.params.subscribe((p) => {
      this.id = p.id;
    });
  }

  ngOnInit() {
    this.getAllRoute(this.id);
  }


  getAllRoute(id: string) {
    this.routeService.getAllRoute(id).subscribe((data) => {
      this.stops = data.stops;
    });
  }
}
