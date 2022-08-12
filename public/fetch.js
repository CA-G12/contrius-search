const xhr = new XMLHttpRequest();

const fetch = (url, cb) => {
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const dataConvert = JSON.parse(xhr.responseText);
        cb(dataConvert);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
module.exports = fetch;
