export const deletetabledata = (tableArr, index) => {
  const arr = tableArr;

  arr.splice(index, 1);

  return [...arr];
};
