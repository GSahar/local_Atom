
export default {
  compareObjects(obj1,obj2){
    for(let key in obj1){
      if(obj1[key] !== obj2[key]) return false;
    }
    return true;
  },

  copyObject(obj){
    let clone = {};

    for(let key in obj){
      clone[key] = obj[key];
    }

    return clone;
  }

}
