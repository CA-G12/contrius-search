const input = document.querySelector('.search');
const ul = document.querySelector('#ice-cream-flavors');
const cardSection = document.querySelector('.card-section')
const outComplete = (data) => {
  data.forEach((ele) => {
    const li = document.createElement('li');
    li.textContent = ele;
    ul.appendChild(li);
    li.addEventListener('click', () => {
      input.value = li.textContent;
      fetch('/gitPosts', filterCard);
    });
  });
};
document.body.onclick = (e) => {
  if (!e.target.matches('.recommends span, form input')) {
    ul.textContent = '';
  }
};
const posts = (data) => {
  data.forEach((el) => {
    const div = document.createElement('div');
    const divImg = document.createElement('div');
    const descriptionCard = document.createElement('div');
    const img = document.createElement('img');
    const cardName = document.createElement('h1');
    div.appendChild(divImg);
    div.appendChild(descriptionCard);
    divImg.appendChild(img);
    descriptionCard.appendChild(cardName);
    cardSection.appendChild(div);
    cardName.textContent = el.name.common;
    img.src = el.flags.png;
  });
};
const filterCard = (data) => {
  cardSection.textContent = '';
  const filterData = data.filter((el) => {
    const lower = el.name.common.toLowerCase();
    return lower.includes(input.value);
  });
  filterData.forEach((el) => {
    const div = document.createElement('div');
    const divImg = document.createElement('div');
    const descriptionCard = document.createElement('div');
    const img = document.createElement('img');
    const cardName = document.createElement('h1');
    div.appendChild(divImg);
    div.appendChild(descriptionCard);
    divImg.appendChild(img);
    descriptionCard.appendChild(cardName);
    cardSection.appendChild(div);
    cardName.textContent = el.name.common;
    img.src = el.flags.png;
  });
};
input.addEventListener('keyup', () => {
  ul.textContent = '';
  postData('/create-post', input.value);
  fetch('/gitOutCom', outComplete);
});
fetch('/gitPosts', posts);
