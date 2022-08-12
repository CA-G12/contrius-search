const fs = require('fs');

const data = fs.readFileSync('src/data.json', 'utf-8');
const countryName = JSON.parse(data).map((ele) => ele.name.common);
fs.writeFileSync('src/country-name.json', JSON.stringify(countryName));
