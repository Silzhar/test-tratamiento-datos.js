export default (json) => {
  let sum = 0;

  json.forEach((person) => {
    sum += person.edad;
  });

  const average = sum / json.length;

  return average.toFixed(2);
};
