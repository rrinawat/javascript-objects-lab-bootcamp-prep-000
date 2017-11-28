var recipes = {}
//update object non destructively, use object.assign and use new {} as target
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
//update object destructively, can sitll use Object.assign, but do not declare a new target obj
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
//non-destructively delete key from object
function deleteFromObjectByKey(object, key){
  var object = Object.assign({},object)
  var newObject = Object.assign({}, object)
  delete newObject.key
  return newObject
}
//
