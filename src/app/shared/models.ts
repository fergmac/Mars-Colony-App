export interface IEncounters {

	date: string;
	colonist_id: number;
	atype: string;
	action: string;
}

export interface IAlien {

	type: string;
	submitted_by: string;
	description: string;
}

export interface IOccupation {

	name: string;
	description: string;
}

export interface IColonist {
	name: string;
	age: number;
	job: IOccupation;
}