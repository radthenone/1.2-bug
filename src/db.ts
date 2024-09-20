import { Person, Age, Location } from './db.interface'

let persons: Person[] = [
	{ id: 1, name: 'Jan Kowalski' },
	{ id: 2, name: 'John Doe' },
	{ id: 3, name: 'Jarek Kaczka' }
];

let ages: Age[] = [
	{ person: 1, age: 18 },
	{ person: 2, age: 24 },
	{ person: 3, age: 666 },
];

let locations: Location[] = [
	{ person: 1, country: 'Poland' },
	{ person: 3, country: 'Poland' },
	{ person: 1, country: 'USA' },
];

export { persons, ages, locations }