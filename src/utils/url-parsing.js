export const removeSpacesAddPlus = (term) => {
  let termArr = term.split(" ");
  termArr = termArr.filter((item) => {
    if (item == "") {
      return false;
    }
    return true;
  });
  return termArr.join("+");
};

export const removePlusAddSpaces = (term) => {
  let termArr = term.split("+");
  return termArr.join(" ");
};
