const BANDS  = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const translateResistanceColors = (colors) => {
  return BANDS.indexOf(colors[0]) * 10 + BANDS.indexOf(colors[1]);
}
