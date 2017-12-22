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

readData()