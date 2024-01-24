


export default {
  compareObjects(obj1,obj2){
    // Цикл через свойства объекта obj1
  for (let p in obj1) {
    //Проверка на то, что оба объекта существуют
    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

    switch (typeof (obj1[p])) {
      // Глубокое сравнение объектов по ключам и значения:
      case 'object':
        //Нужно добавить что бы была еще проверка на дату внутри
        if (
          obj1[p] instanceof Date &&
          obj2[p] instanceof Date &&
          String(obj1[p]) !== String(obj2[p])
        )
          return false
        if (!this.compareObjects(obj1[p], obj2[p])) return false;
        break;
      // Сравнение данных типа function:
      case 'function':
        if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
        break;
      // Сравнение значений:
      default:
        if (obj1[p] != obj2[p]) return false;
    }
  }

  // Проверка объекта obj2 на дополнительные свойства:
  for (var p in obj2) {
    if (typeof (obj1[p]) == 'undefined') return false;
  }
  return true;
  },

  copyObject(obj){
    let clone = {};
    Object.assign(clone,obj);
    return clone;
  }
}
