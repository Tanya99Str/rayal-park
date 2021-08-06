export function color(i) {
  if (!i) {
    return "black";
  }
  let str: string = String(i);
  if (str.length > 1) {
    str = str.substring(0, 1);
  }
  if (str == '1') {
    return "#ffff00";
  } else if (str == '2') {
    return "#bc8f8f";
  } else if (str == '3') {
    return "#800000";
  } else if (str == '4') {
    return "#f4a460";
  } else if (str == '5') {
    return "#808000";
  } else if (str == '6') {
    return "#db7093";
  } else if (str == '7') {
    return "#9acd32";
  } else if (str == '8') {
    return "#66cdaa";
  } else if (str == '9') {
    return "#008080";
  } else if (str == '0') {
    return "#483d8b";
  }
}
