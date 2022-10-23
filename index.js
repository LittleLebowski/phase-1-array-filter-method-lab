// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(arr, drivername) {
  const drivernames = arr.filter(
    (x) => x.toLowerCase() === drivername.toLowerCase()
  );

  return drivernames;
}
//.map((x) => x.name)

function fuzzyMatch(arr, driverName) {
  const drivernames = [];
  for (let i = 0; i < arr.length; i++) {
    const listName = forLoop(arr[i].toLowerCase());
    const driver = forLoop(driverName.toLowerCase());
    listName.length = driver.length;
    let listNameStr = JSON.stringify(listName);
    let driverStr = JSON.stringify(driver);
    if (listNameStr === driverStr) {
      drivernames.push(arr[i]);
    }
  }
  return drivernames;
}

function forLoop(string) {
  const newArr = [];
  for (let i = 0; i < string.length; i++) {
    newArr.push(string[i]);
  }
  return newArr;
}

//console.log(fuzzyMatch(drivers, "Bob"));

const driversObj = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(arrObj, string) {
  const drivernames = arrObj.filter((x) => {
    if (x.name.toLowerCase() === string.toLowerCase()) {
      return x.name;
    }
  });

  return drivernames;
}

console.log(matchName(driversObj, "bobby"));
