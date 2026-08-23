export const getLoadSpeedIndex = (
  loadIndex: number | string,
  speedIndex: number | string,
): string => {
  switch (speedIndex) {
    case 81:
      return `${loadIndex}Q`;

    case 82:
      return `${loadIndex}R`;

    case 83:
      return `${loadIndex}S`;

    default:
      return '';
  }
};
