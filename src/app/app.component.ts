import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien.service';
import { ColonistService } from './shared/services/colonist.service';
import { EncounterService } from './shared/services/encounters.service';
import { OccupationService } from './shared/services/occupation.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ AlienService, ColonistService, EncounterService, OccupationService ]
})
export class AppComponent {

	constructor(alienService: AlienService, colonistService: ColonistService, encounterService: EncounterService, occupationService: OccupationService){
    
  }

}
