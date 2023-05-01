// ## Coding time!

// ### Older movies

// Improve the example movie program from above so that it shows the titles of movies released before year 2000, using functional programming.

// ```js

// filter the movies with release date.
// release date should be less than year 2000

const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

// TODO: Make an array of the titles of movies released before 2000

const moviesBefore2000 = movies => {
 return movies.filter(movie => movie.year < 2000).map(movie => movie.title)
}

//console.log(moviesBefore2000(movieList));
// ```

// ![Execution result](images/chapter10-02.png)

// ### Government forms

// Complete the following program to compute and show the names of political forms ending with `"cy"`.

// ```js
const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

// // TODO: compute the formsEndingWithCy array

// // Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
// console.log(formsEndingWithCy);
// ```

const formsEndingWithCy = forms => {
 return forms.filter(form => form.name.endsWith('cy')).map(form => form.name)
}


// ### Arrays sum

// Complete the following program to compute and show the total sum of the values in each of the arrays.

// ```js
 const arrays = [[1, 4], [11], [3, 5, 7]];

// // TODO: compute the value of the arraysSum variable
// nested arrays, should be summed up to one value.
// use reduce.

// const arraysSum = arrs => {

//  let arrSum = 0;

//  arrs.forEach(arr => {
//   arrSum += arr.reduce((acc, c) => acc + c)
//  })

//  return arrSum
// }

const arraysSum = arrays.reduce((total, arr) => {
  return total + arr.reduce((sum, value) => sum + value, 0);
}, 0);

const arraysSum2 = arrays
  .flatMap((arr) => arr)
  .reduce((total, value) => total + value, 0);


// console.log(arraysSum); // Should show 31
// ```

// ### Student results

// Here's a program that shows female students results (name and average grade).

// ```js
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// // Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}


const femaleStudentsResultsRefactored = students
.filter(student => student.sex === 'f')
.map(student => {
  const avgGrade = student.grades.reduce((acc, c) => acc + c) / student.grades.length;
  return {name: student.name, avgGrade: avgGrade};
}
)





// console.log(femaleStudentsResults);
// ```

// Refactor it using functional programming. Execution result must stay the same.

// ![Execution result](images/chapter10-03.png)
