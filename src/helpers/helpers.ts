import { Dayjs } from "dayjs"

export function returnResidentFormStatus(name: string, firstName: string, lastName: string, room: string, birthDate: Dayjs | null, moveInDate: Dayjs | null) {
	if (!name.length ||
		!firstName.length ||
		!lastName.length ||
		!room.length ||
		!birthDate ||
		!moveInDate) {
		return true
	}
	return false;
}