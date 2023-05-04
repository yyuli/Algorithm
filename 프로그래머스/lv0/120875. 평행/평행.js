const solution = (dots) => {
  const calculateSlope = (arr1, arr2) => {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
  };

  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3])) {
    return 1;
  } else if (
    calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3])
  ) {
    return 1;
  } else if (
    calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2])
  ) {
    return 1;
  } else {
    return 0;
  }
};