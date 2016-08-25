import { Injectable } from '@angular/core'; //this means angular will do something to this code we write
import { IAlien } from '../models'; //imports alien interface into service
import { Http, Headers } from '@angular/http'; //this is the library angular gives us for importing ajax
import 'rxjs/add/operator/toPromise'; //so that we can make Promises

@Injectable()
export class AlienService {
	aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

	constructor(private http: Http) {} 

	getAliens(): Promise<IAlien[]> {
	return this.http.get(this.aliensUrl)
					.toPromise()
					.then( response => response.json().aliens)
					.catch(this.handleError);

	}	

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error );
	}


}
	
