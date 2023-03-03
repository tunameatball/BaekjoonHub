function solution(wallpaper) {
  let x1 = -1;
  let x2 = -1;
  let y1 = 50;
  let y2 = -1;
  
  wallpaper.forEach((row, index) => {
    if (row.includes('#')) {
      x2 = index + 1;
      if (x1 == -1) {
        x1 = index;
      }
    }
    row.split('').forEach((column, index) => {
      if (column == '#') {
        y2 = y2 < index + 1 ? index + 1 : y2;
        y1 = y1 > index ? index : y1;
      }
    });
  })
  
  return [x1, y1, x2, y2];
}