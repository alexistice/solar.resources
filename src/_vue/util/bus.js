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

function productsFilter(category, name, checked) {
  if (checked) {
    this[category].push(name);
    console.log(this[category]);
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

export { checkFilter, productsFilter, setDay };