const getFullName = person => `${person.firstName} ${person.lastName}`


const changeToLowerCase = string => string.toLowerCase() // changing the whole text to lower case
const match = string =>  string.match(/\b(?![\w\d]*\d)[\w]+/g)   // filtering only words in text (without special characters or numbers) and changing the whole text to array of words
const removeDuplicates = array => array.filter((value, i, self) => { // removing duplicates from an array 
    return i === self.indexOf(value);
});
const sortArray = array => array.sort() // sorting the array
const filterUniqueWords = text => sortArray(removeDuplicates(match(changeToLowerCase(text))))
    
const getAverageGrade = (students) => {
    const getGrades = array => array.reduce((accumulator, student) => accumulator + student.grade,0)    // getting the sum of the grades
    return getGrades(students)/students.length
}



