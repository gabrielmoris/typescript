//If you hover, it has an automatic value
enum Seatchoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}
//It can be modified and the rest follow the pattern
enum Seatchoice2 {
  AISLE = 24,
  MIDDLE,
  WINDOW,
  FOURTH,
}
//Or even put strings (But all need to be modified)
enum Seatchoice3 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
  FOURTH = 0,
}

const hcSeat = Seatchoice.AISLE;
console.log("hcSeat", hcSeat);
