import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countries: Country[] = []
  public isLoading: boolean = false;

  searchByCapital( term: string ){

    this.isLoading = true

    this._countriesService.searchCapital( term ).subscribe((data)=>{
      this.countries = data
      this.isLoading = false
    }) 

  }

  constructor(  private _countriesService: CountriesService ){}






}
