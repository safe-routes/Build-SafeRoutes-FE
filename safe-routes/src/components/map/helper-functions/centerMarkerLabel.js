export default amountOfLetters => {
  if (amountOfLetters === 1) {
    return 10;
  } else {
    return 10 + amountOfLetters * 3.1;
  }
};
