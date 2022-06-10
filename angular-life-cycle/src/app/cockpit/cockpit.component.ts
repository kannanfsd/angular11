import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvData') serverElements = new EventEmitter<{sname: string, scontent: string}>();
  @Output('bpData') blueprintElements = new EventEmitter<{bname: string, bcontent: string}>();
  @ViewChild('sContent') contentInput!: ElementRef;
  //serverName: string = '';
  //serverContent: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(sName: HTMLInputElement) {
    this.serverElements.emit({
      sname: sName.value,
      scontent: this.contentInput.nativeElement.value
    });
  }
  onAddBlueprint(sName: HTMLInputElement) {
    this.blueprintElements.emit({
      bname: sName.value,
      bcontent: this.contentInput.nativeElement.value
    });
  }

}
