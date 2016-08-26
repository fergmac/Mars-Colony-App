import { Component, OnInit } from '@angular/core';
import { Encounter, IAlien } from '../shared/models';
import { AlienService } from '../shared/services/alien.service';
import { Router } from '@angular/router';
import { EncounterService } from '../shared/services/encounters.service';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})
export class ReportComponent implements OnInit {


  NO_ALIEN_SELECTED = '(none)';
  SERVER_ERROR = '';

  public aliens: IAlien[];
  public encounter: Encounter;

   	constructor(
  		private router: Router,
  		private alienService: AlienService,
      private encounterService: EncounterService
  		
  		) { 
        this.SERVER_ERROR = '';
        this.encounter = new Encounter('', '', '', '555');
  
  			alienService.getAliens().then(aliens => {
          console.log(aliens);
          this.aliens = aliens
        });
  		 }

    onSubmit() {
      // this.colonistService.newColonist(this.colonist).then(colonist => {
      //   this.router.navigate(['/encounters']);

      // }).catch(error => {
      //   // TODO: handle error
      //   this.SERVER_ERROR = 'There was an error processing the colonist.';
      // });
    }


    // get noAlien() {
    //   return this.encounters.atype === this.NO_ALIEN_SELECTED;
    // }

  ngOnInit() {
  }

}
