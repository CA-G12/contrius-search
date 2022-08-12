const postData = (url, cb, input) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const dataConvert = JSON.parse(xhr.responseText);
      cb(dataConvert);
    }
  };
  xhr.open('POST', url);
  xhr.send(input);
};
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
  