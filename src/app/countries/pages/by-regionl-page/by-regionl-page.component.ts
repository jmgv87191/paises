import { Component, OnInit,  } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-regionl-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent,CommonModule],
  templateUrl: './by-regionl-page.component.html',
  styleUrl: './by-regionl-page.component.css'
})
export class ByRegionlPageComponent implements OnInit {

  countries: Country[] = [];
  public regions: string[] = [  'Africa','Americas','Asia','Europe','Oceania' ];
  public selectedRegion?:string;


  constructor( private countryServices:CountriesService ){}

  ngOnInit(): void {

    this.countries = this.countryServices.cacheStore.byRegion.countries
    this.selectedRegion = this.countryServices.cacheStore.byRegion.region 

  }

  searchByRegion( term:string ){

    this.selectedRegion = term;
    
    this.countryServices.searchByRegion( term ).subscribe((data)=>{
      this.countries = data
    })

  }

}
