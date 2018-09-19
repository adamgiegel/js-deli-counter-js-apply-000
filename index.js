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
      return currLine.slice(currLine[i])
  }
}