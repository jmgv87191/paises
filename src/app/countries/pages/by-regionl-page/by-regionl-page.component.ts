import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-regionl-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-regionl-page.component.html',
  styleUrl: './by-regionl-page.component.css'
})
export class ByRegionlPageComponent {

  countries: Country[] = []

  constructor( private countryServices:CountriesService ){}

  searchByRegion( term:string ){
    
    this.countryServices.searchByRegion( term ).subscribe((data)=>{
      this.countries = data
    })

  }

}
