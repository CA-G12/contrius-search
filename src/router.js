const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    const filePath = path.join(__dirname, '..', '/public', 'index.html');
    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (endpoint === '/stayl.css') {
    const filePath = path.join(__dirname, '..', '/public', 'stayl.css');

    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else if (endpoint === '/main.js') {
    const filePath = path.join(__dirname, '..', '/public', 'main.js');

    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (endpoint === '/fetch.js') {
    const filePath = path.join(__dirname, '..', '/public', 'fetch.js');

    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (endpoint === '/create-post'    ) {
    const filePath = path.join(__dirname,  "country-name.json");
    let allData = '';
    req.on('data', (chunk) => {
      allData += chunk;
    });
    req.on('end', () => {
        console.log(allData)
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('server err');
          return;
        }
        const jsonData = JSON.parse(data);
        const filterData = jsonData.filter((ele) => ele.includes(allData));
        fs.writeFile('src/autocomplete.json', JSON.stringify(filterData), () => console.log('it`s work'));
      });
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  } else if (endpoint === '/gitOutCom') {
    const filePath = path.join(__dirname, 'autocomplete.json');

    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    });
  }
//  else if (endpoint === '/gitPosts') {
//     const filePath = path.join(__dirname, 'data.json');

//     // eslint-disable-next-line consistent-return
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/html' });
//         res.write('Server Error');
//         res.end();
//         return '';
//       }
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.write(data);
//       res.end();
//     });
//   }
 else {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.write('server Error');
    res.end();
  }
};
module.exports = router;
