function takeANumber(currLine, newName){
  if(!currLine.length){currLine.push(newName)
  return `Welcome, ${newName}. You are number 1 in line.`}
  if(currLine.length > 0){currLine.push(newName)
  return `Welcome, ${newName}. You are number ${currLine.length} in line.`}
}

function nowServing(currLine){
    if(!currLine.length){
    return "There is nobody waiting to be served!"}
    else {
      return "Currently serving " + currLine.shift() + "."
  }
}

function currentLine(currLine){
   if(!currLine.length){
      return "The line is currently empty."
    } 
  let newStr = ''
  for(let i = 1; i < currLine.length; i++){
      newStr += "The line is currently:" + i + '.' + currLine[i]
    }
    return newStr
}