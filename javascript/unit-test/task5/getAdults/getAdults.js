export const getAdults = (obj) => {
  // put your code here
  const adults = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      adults[key] = obj[key];
    }
  }
  return adults;
};
