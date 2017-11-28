var recipes = {}
//update object non destructively
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
//update object destructively, can sitll use Object.assign, but do not declare a new target obj
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {key: value})
}