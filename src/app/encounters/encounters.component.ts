import { Component } from '@angular/core';
import { Encounter } from '../shared/models';
import { Router } from '@angular/router';
import { EncounterService } from '../shared/services/encounters.service';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css']
})
export class EncountersComponent {

	public encounters:  Encounter[];

  constructor(

	private router: Router,
	private encounterService: EncounterService

  	) { 
  	encounterService.getEncounter().then( encounters => this.encounters = encounters);
  	
  }

  // ngOnInit() {
  // }

}
