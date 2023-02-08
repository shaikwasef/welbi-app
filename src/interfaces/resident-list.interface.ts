
export interface IResidentList {
	id: string;
	name: string;
	room: string;
	attendance: Array<IResident>
}

export interface IResident {
	programId: string;
	residentId: string;
	status: Status
}

export enum Status {
	ACTIVE = "Active",
	PASSIVE = "Passive",
	DECLINED = "Declined",
	UNDEFINED = "Undefined"
}

export enum LevelOfCare {
	INDEPENDENT = "INDEPENDENT",
	ASSISTED = "ASSISTED",
	MEMORY = "MEMORY",
	LONGTERM = "LONGTERM"
}

export enum Ambulation {
	NOLIMITATIONS = "NOLIMITATIONS",
	CANE = "CANE",
	WALKER = "WALKER",
	WHEELCHAIR = "WHEELCHAIR"
}