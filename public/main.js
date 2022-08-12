const input = document.querySelector('.search');
const ul = document.querySelector('#ice-cream-flavors');
const cardSection = document.querySelector('.card-section')
const outComplet = (data) => {
  data.forEach((ele) => {
    const li = document.createElement('li');
    li.textContent = ele;
    ul.appendChild(li);
    li.addEventListener('click',(e)=>{
        input.value=li.textContent
    })
  });
};
document.body.onclick = (e) => {
    if (!e.target.matches(".recommends span, form input")) {
      ul.textContent = "";
    } 
  };
const posts=(data)=>{
 
  data.forEach((el)=> {
    const div = document.createElement('div');
    const divImg = document.createElement('div');
    const descrptionCard = document.createElement('div');
    const img = document.createElement('img');
    const cardName = document.createElement('h1')
    div.appendChild(divImg)
    div.appendChild(descrptionCard)
    divImg.appendChild(img);
    descrptionCard.appendChild(cardName)
    cardSection.appendChild(div)
    console.log(el);
    cardName.textContent = el.name.common;
    img.src = el.flags.png;
  })
  }
  input.addEventListener('keyup', (e) => {
  ul.textContent = '';
  postData('/create-post', (data) => console.log(data), input.value);
  fetch('/gitOutCom', outComplet);
});
fetch('/gitPosts', posts);
