import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = [
      {
        airline: "American Airline",
        remainingNumberOfSeats: 500,
        departure: { time: Date.now().toString(), place: "Los Angles" },
        arrival: { time: Date.now().toString(), place: "Istanbul" },
        price: "350",
      },
      {
        airline: "PIA",
        remainingNumberOfSeats: 70,
        departure: { time: Date.now().toString(), place: "London" },
        arrival: { time: Date.now().toString(), place: "Lahore" },
        price: "650",
      },
    {
      airline: "British Airways",
      remainingNumberOfSeats: 780,
      departure: { time: Date.now().toString(), place: "London" },
      arrival: { time: Date.now().toString(), place: "Dhaka" },
      price: "450",
    },
    ]
  
  constructor() { }
    
  ngOnInit(): void {
  }

}

export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNumberOfSeats: number;
}

export interface TimePlaceRm {
  place: string;
  time: string;
}
