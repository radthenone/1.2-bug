// run `npx ts-node src/index.ts` in the terminal
import {ages, locations} from './db';

import {filter, from, map, reduce} from 'rxjs'

const AvgAge = (addLocation: string) => {

	// persons ID that live in Poland
  const filteredLocations = from(locations).pipe(
    filter(location => location.country === addLocation),
    map(location => location.person)
  );

	// ages NUMBER to this persons
  const filteredAges = filteredLocations.pipe(
    map(personId => ages.find(age => age.person === personId)),
    filter(age => age !== undefined),
    map(calcAge => calcAge.age)
  );

	// average AGE
	return filteredAges.pipe(
		reduce((x, age) => {
			x.sum += age;
			x.count += 1;
			return x;
		}, {sum: 0, count: 0}),
		map(acc => acc.sum / acc.count)
	)
};

AvgAge("Poland").subscribe(avgAge => {
  console.log(`The average age of persons living in Poland is: ${avgAge}`);
});
