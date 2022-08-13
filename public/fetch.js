// eslint-disable-next-line no-unused-vars
const postData = (url, cb, input) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.send(input);
};
// eslint-disable-next-line no-unused-vars
const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const dataConvert = JSON.parse(xhr.responseText);
      cb(dataConvert);
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
