import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('myData') element!: {type: string, name: string, content: string};
  @Input() name!: string;
  constructor() { 
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
    console.log('ngContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }

}
