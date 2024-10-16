export const generateRandomNumBetween = (
  min: number,
  max: number,
  exclude?: number,
) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNumBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};
