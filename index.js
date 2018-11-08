const express = require('express')
const app = express()
const port = 3000
//console.log(process.argv)
let workspace = "";
process.argv.forEach(function (val, index, array) {
  let args = val.split("=");
  if (args[0] == "workspace") workspace = args[1];
});

app.get('/open-tests', (request, response) => {
  const cypress = require('cypress')


  cypress.open({
    //project: pageId,
    //fileServerFolder: '/home/melanie/sources/bonita-web-pages/uid-pages/' + pageId
    config: {
      integrationFolder: workspace + "test/specs",
      fixturesFolder: workspace + "test/mockServer"
    }
  });
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
