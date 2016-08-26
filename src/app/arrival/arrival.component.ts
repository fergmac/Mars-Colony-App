import { Component, OnInit } from '@angular/core';
import { Colonist, IOccupation } from '../shared/models';
import { ColonistService } from '../shared/services/colonist.service';
import { OccupationService } from '../shared/services/occupation.service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent implements OnInit {

	NO_OCCUPATION_SELECTED = '(none)';
  SERVER_ERROR = '';


	public occupations: IOccupation[];
	public colonist: Colonist;

  	constructor(
  		private router: Router,
  		private colonistService: ColonistService,
  		private occupationService: OccupationService
  		) { 
        this.SERVER_ERROR = '';
  			this.colonist = new Colonist('','', this.NO_OCCUPATION_SELECTED);
  			occupationService.getOccupations().then(jobs => {
          console.log(jobs);
          this.occupations = jobs
        });
  		 }

    onSubmit() {
      this.colonistService.newColonist(this.colonist).then(colonist => {
        this.router.navigate(['/encounters']);

      }).catch(error => {
        // TODO: handle error
        this.SERVER_ERROR = 'There was an error processing the colonist.';
      });
    }


    get noOccupation() {
      return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
    }

  	ngOnInit() {
  	}

}
