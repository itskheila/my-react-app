function calculatePaye(s) {
  return s * 0.16;
}

// Component Funcition(JSX)
// Render:Display Calling a function
function ObjData() {
  return (
    <div>
      <Person1 />
      <Person2 />
      <Person3 />
    </div>
  );
}

function Person1() {
  let person = {
    author: "Samson Mwangi",
    is_married: true,
    salary: 30000,
  };

  return (
    <div>
      <h1>Person 1:Dot Notation/Bracket Notation</h1>
      <p>The Author of this book is {person.author}</p>
      <p>The author is married {person.is_married.toString()}</p>
      <p>The Author salary {person["salary"]}</p>
      <p>The paye is {calculatePaye(person.salary)}</p>
    </div>
  );
}

function Person2() {
  let person = {
    author: "Samson Mwangi",
    is_married: true,
    salary: 30000,
  };

  const { author, is_married, salary } = person;

  return (
    <div>
      <h1>Person 2:Object Destructure</h1>
      <p>The Author of this book is {author}</p>
      <p>The author is married {is_married.toString()}</p>
      <p>The Author salary {salary}</p>
      <p>The paye is {calculatePaye(salary)}</p>
    </div>
  );
}

function Person3() {
  let arrayData = ["John Mugi", true, 40000];
  const [author, is_married, salary] = arrayData;
  return (
    <div>
      <h1>Person 3:Array Destrture</h1>
      <p>The Author of this book is {author}</p>
      <p>The author is married {is_married.toString()}</p>
      <p>The Author salary {salary}</p>
      <p>The paye is {calculatePaye(salary)}</p>
    </div>
  );
}

export default ObjData;
