import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {



  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input() placeholder: string = '';
  @Input() public initialValue: string = '';


  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();


  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    ).
    
    subscribe( value =>{

      this.onDebounce.emit(value)

    } )

  }

  ngOnDestroy(): void {

    this.debouncerSuscription?.unsubscribe();

  }

  
  emitValue(  value: string ){
    this.onValue.emit( value )
  }

  onKeyPress( searchTerm: string ){

    this.debouncer.next(searchTerm)

  }

}
