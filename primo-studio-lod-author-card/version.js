const fs = require('fs');
const path = require('path');
const getPath = file => path.resolve(__dirname, file)
const { version } = require(getPath('../package.json'));

['./package.json', './features.json'].forEach(file => {
  file = getPath(file);
  let contents = JSON.parse(fs.readFileSync(file, "utf8"));
  fs.writeFileSync(file, JSON.stringify(Object.assign(contents, { version }), null, 2));
})
