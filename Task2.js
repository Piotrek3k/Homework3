const getFullName = person => `${person.firstName} ${person.lastName}`

const removeDuplicates = (arr) => {
    // function to remove duplicates from an array = to find unique values
    let result = arr.filter((value, i, self) => {
 
        // It returns the index of the first
        // instance of each value
        return i === self.indexOf(value);
    });
 
    return result;
}
const filterUniqueWords = text => {
    return removeDuplicates(text.split()) // TODO: sort
}
const getGrades = (arr) => {
    let grades = new Array(arr.length)
    arr.forEach(student => {
        grades.push(student.grade)
    });
}

const getAverage = (arr) => {
    // function getting arithmetical average from array
    let sum = 0
    arr.forEach(element => {
        sum+=element
    });
    return sum / arr.length
}
const getAverageGrade = (students) => {
    return getAverage(getGrades(students))
}
const user1 = {
    firstName: "Jane",
    lastName: "Doe",
}
console.log(getFullName(user1))


console.log(removeDuplicates(["Ale","Alex","John","Ale","Alex","Jane","Alex","Al"]))

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])