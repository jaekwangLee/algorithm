function getTailText(len) {
  if (len > 1) return " like this";
  else return " likes this";
}

function getNames(peoples) {
  if (peoples.length >= 4) {
    const users = peoples.slice(0, 2).join(", ");
    const lastUser = ` and ${peoples.length - 2} others`;
    return users + lastUser;
  } else if (peoples.length >= 2) {
    const users = peoples.slice(0, peoples.length - 1).join(", ");
    const lastUser = ` and ${peoples[peoples.length - 1]}`;
    return users + lastUser;
  } else if (peoples.length === 1) {
    return peoples[0];
  } else {
    return "no one";
  }
}

function likes(peoples) {
  console.log(getNames(peoples) + getTailText(peoples.length));
}

likes([]);
// "no one likes this"
likes(["Rafy"]);
// "Rafy likes this"
likes(["Rafy", "Ryan"]);
// "Rafy and Ryan like this"
likes(["Rafy", "Ryan", "Curian"]);
// "Rafy, Ryan and Curian like this"
likes(["Rafy", "Ryan", "Curian", "Billy"]);
// "Rafy, Ryan and 2 others like this"
likes(["Rafy", "Ryan", "Curian", "Billy", "Green"]);
// "Rafy, Ryan and 3 others like this"
