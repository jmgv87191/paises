import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countries: Country[] = []

  searchByCapital( term: string ){

    this._countriesService.searchCapital( term ).subscribe((data)=>{
      this.countries = data
      
    }) 

  }

  constructor(  private _countriesService: CountriesService ){}






}
