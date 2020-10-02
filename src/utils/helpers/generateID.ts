export const generateID = () => {
  let first: any = (Math.random() * 46656);
  let second: any = (Math.random() * 46656);
  first = (`000${first.toString(36)}`).slice(-3);
  second = (`000${second.toString(36)}`).slice(-3);

  return first + second;
};
