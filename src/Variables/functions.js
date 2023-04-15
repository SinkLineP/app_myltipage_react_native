export const generateUsername = (email) => {
  const minNumber = 1000;
  const maxNumber = 9999;
  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const emailTitle = email.split("@")[0];
  const randNumber = rand(minNumber, maxNumber);

  return `${emailTitle}-${randNumber}`;
}