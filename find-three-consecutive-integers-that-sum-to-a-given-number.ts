function sumOfThree(num: number): number[] {
  const divider = num / 3;
  if (!Number.isInteger(divider)) {
    return [];
  }
  return [divider - 1, divider, divider + 1];
}


