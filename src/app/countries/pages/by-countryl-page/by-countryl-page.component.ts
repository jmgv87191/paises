import { Component, Input } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countryl-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-countryl-page.component.html',
  styleUrl: './by-countryl-page.component.css'
})
export class ByCountrylPageComponent {

  countries: Country[] = []

  constructor( private countriesService: CountriesService ){
    
  }

  searchByCountry( term:string ){
    this.countriesService.searchByCountry( term ).subscribe((data)=>{
      this.countries = data;
    })
  }

}
