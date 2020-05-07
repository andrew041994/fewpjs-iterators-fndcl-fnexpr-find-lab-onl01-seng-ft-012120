const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
 let result = arr.find( function(win) {
    return win.result === "W"
  })
  if (result) {
    return result.year
  }

}

// roommates.find( function(s) { return s === "winston" })