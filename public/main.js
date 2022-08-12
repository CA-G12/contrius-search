const input = document.querySelector('.search');
// const form = document.querySelector('.form');
const ul = document.querySelector('#ice-cream-flavors');
const outComplet = (data) => {
  console.log(data)
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
    
}
input.addEventListener('keyup', (e) => {
    console.log(e)
  ul.textContent = '';
  postData('/create-post', (data) => console.log(data), input.value);
  fetch('/gitOutCom', outComplet);
  fetch('/gitPosts', posts);
});
