import {Injectable} from '@angular/core';
import {StopInfo} from '../model/stopInfo.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {


  /**
   * change json filed
   * ***/
  private stopName = '"stopName":';
  private stopSchedules = '"stopSchedules":';
  private lineName = '"lineName":';
  private departureTime = '"departureTime":';


  constructor() {

  }


  jsonChanges(data: Object): StopInfo {
    let stopInfo: StopInfo;
    let odj: Array<any>[];
    odj = [JSON.parse(JSON.stringify(data['stops']).split('"name":').join(this.stopName)
      .split('"routes":').join(this.stopSchedules))];
    for (let i = 0; i < odj.length; i++) {
      for (let s = 0; s < odj[i].length; s++) {
        odj = JSON.parse(JSON.stringify(odj[s]).split('"shape":').join(this.lineName)
          .split('"departure_time":').join(this.departureTime));
      }
      stopInfo = JSON.parse(JSON.stringify(odj));
    }
    return stopInfo;
  }
}
