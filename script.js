const $ = (selector) => document.querySelector(selector);

function getSinglePhoto(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(data => {
      resolve(data.url);          
    })
    .catch(error => {
      reject({error});     
    })
  });
}

const randomUrl = "https://source.unsplash.com/random?1";

getSinglePhoto(randomUrl).then(url => {
  const img = document.createElement('img');
  img.src = url;
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('target', '_blank');
  a.appendChild(img);
  $('.photo').appendChild(a);
  $('.photo').classList.add('fade-in');
  $('.msg').classList.add('fade-out');
});