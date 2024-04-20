const getFullName = person => `${person.firstName} ${person.lastName}`


const changeToLowerCase = string => string.toLowerCase() // changing the whole text to lower case
const splitText = string => string.split(' ')  // changing the text into an array of words
const removeDuplicates = array => array.filter((value, i, self) => { // removing duplicates from an array 
    return i === self.indexOf(value);
});
const sortArray = array => array.sort() // sorting the array
const filterUniqueWords = text => sortArray(removeDuplicates(splitText(changeToLowerCase(text))))
    
const getAverageGrade = (students) => {
    const getGrades = array => array.reduce((accumulator, student) => accumulator + student.grade,0)    // getting the sum of the grades
    return getGrades(students)/students.length
}

