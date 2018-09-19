function takeANumber(currLine, newName){
  if(!currLine.length){currLine.push(newName)
  return `Welcome, ${newName}. You are number 1 in line.`}
  if(currLine.length > 0){currLine.push(newName)
  return `Welcome, ${newName}. You are number ${currLine.length} in line.`}
}