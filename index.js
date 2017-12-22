//read file
//call google api
//call lob api
//write link to letter to cl
const fs = require('fs')

const readData = () => {
  fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if(data) {
      let lines = data.split('\n')
      createSenderObj(lines)
    }
  })
}

const createSenderObj = (lines) => {
  lines = lines.map((line) => {
    return line.slice(line.indexOf(':') + 2)
  })
  var senderInfo = {
    fromName: lines[0],
    addressLine1: lines[1],
    addressLine2: lines[2],
    city: lines[3],
    state: lines[4],
    country: lines[5],
    zip: lines[6],
    message: lines[7]
  }
  getGovernerInfo(senderInfo)
}

readData()