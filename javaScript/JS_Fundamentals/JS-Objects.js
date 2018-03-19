console.log('PART 1');
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
//log out all the students and thier cohorts:
for (let obj of students){
    console.log(`Name: ${obj.name}, Cohort: ${obj.cohort}`);
}



console.log('PART II')
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


//  console out the employees and managers names all uppercase and the length of their names 

for (let key in users){
    console.log(key.toUpperCase());
    let count = 1;
    for (let obj of users[key]){
        let name_length = obj.first_name.length + obj.last_name.length;
        console.log(`${count} - ${obj.last_name.toUpperCase()}, ${obj.first_name.toUpperCase()} - ${name_length}`);
        count++;
    }
}
