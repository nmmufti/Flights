import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-book-fligh',
  templateUrl: './book-fligh.component.html',
  styleUrls: ['./book-fligh.component.css']
})

export class BookFlighComponent implements OnInit {

 constructor(private route: ActivatedRoute,
    private flightService: FlightService) { }

  flightId: string = 'not loaded'
  flight: FlightRm = {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(p => this.findFlight(p.get("flightId")));
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';

  }



}
