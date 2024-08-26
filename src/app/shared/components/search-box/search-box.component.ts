import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {


  private debouncer: Subject<string> = new Subject<string>();

  @Input() placeholder: string = '';
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();


  ngOnInit(): void {

    this.debouncer.pipe(
      debounceTime(300)
    ).
    
    subscribe( value =>{

      this.onDebounce.emit(value)

    } )

  }
  
  emitValue(  value: string ){
    this.onValue.emit( value )
  }

  onKeyPress( searchTerm: string ){

    this.debouncer.next(searchTerm)

  }

}
