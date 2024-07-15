export default (json) => {
  let concatenatedResult = "";

  json.forEach((person) => {
    let nameCompleted = `${capitalize(person.nombre)} ${capitalize(
      person.apellido
    )}`;

    if (person.apellido2) {
      nameCompleted += ` ${capitalize(person.apellido2)}`;
    }

    concatenatedResult += nameCompleted + "<br>";
  });

  return concatenatedResult;
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
