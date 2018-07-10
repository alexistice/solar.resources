function checkFilter(category, name, checked) {
  if (checked) {
    this[category].push(name);
  } else {
    let index = this[category].indexOf(name);
    if (index > -1) {
      this[category].splice(index, 1);
    }
  }
}

function setDay(day) {
  this.day = day;
}

export { checkFilter, setDay };