import { Component } from '@angular/core';
import { Hotel } from '../class/hotel';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/Service/hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

  hid!: number;
  hotel!: Hotel;
  hotelsInCity!: Hotel[];
  constructor(private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hid = this.route.snapshot.params['hid'];

    this.hotel = new Hotel();
    this.hotelService.getHotelById(this.hid).subscribe( data => {
      this.hotel = data;
    });
  }


}
