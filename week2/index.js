const MatchMaker = require('./MatchMaker')
const fs = require('fs')

function main () {
  let matchObject = MatchMaker.createPeopleAndMatch()
  matchObject = JSON.stringify(matchObject)
  fs.writeFile('myjsonfile.json', matchObject, 'utf8', (err, result) => {
    console.log('File Written')
  })
}

main()
