import { Dayjs } from "dayjs"

export function returnResidentFormStatus(name: string, firstName: string, lastName: string, room: string, birthDate: Dayjs | null, moveInDate: Dayjs | null, status: string, ambulation: string) {
	if (!name.length ||
		!firstName.length ||
		!lastName.length ||
		!room.length ||
		!birthDate ||
		!moveInDate ||
		!status.length ||
		!ambulation.length) {
		return true
	}
	return false;
}

export function returnProgramFormStatus(name: string, personHobbies: string[], levelOfCare: string[], facilitators: string[], dimension: string, tags: string[], location: string, startDate: Dayjs | null, endDate: Dayjs | null, allDay: string, isRepeated: string) {
	if (!name.length ||
		!personHobbies.length ||
		!levelOfCare.length ||
		!facilitators.length ||
		!dimension.length ||
		!tags.length ||
		!location.length ||
		!startDate ||
		!endDate ||
		!allDay.length ||
		!isRepeated.length) {
		return true
	}
	return false;
}