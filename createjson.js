
import people from './source.json' assert { type: "json" };
import fs from 'fs';


const assistants = people.filter(person => person.assistant)



const result = assistants.map((assistant) => {

    const student = people.filter(person => !person.assistant && person.group === assistant.group)

    return {
        ...assistant,
        student: student
    }
})
console.log(result)


const jsonString = JSON.stringify(result);

fs.writeFile('result.json', jsonString, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('JSON data is written to the file successfully!');
});
