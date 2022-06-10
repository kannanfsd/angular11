import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-life-cycle';
  serverName: string = '';
  serverContent: string = '';
  serverElements: {type: string, name: string, content: string}[] = [
    {type: 'server', name: 'angular', content: 'Welcome back Angular'}
  ];
  onAddServer(serverData: {sname: string, scontent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.sname,
      content: serverData.scontent
    });
  }
  onAddBlueprint(blueprintData: {bname: string, bcontent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.bname,
      content: blueprintData.bcontent
    });
  }
  onSetValue() {
    this.serverElements[1].name = 'Changed!';
  }
  onDeleteValue() {
    this.serverElements.splice(0, 1);
  }
}
