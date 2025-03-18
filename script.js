const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 function displayRamens(){
const ramenMenu = document.getElementById('ramen-menu');
ramens.forEach(ramen =>{
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id;
    img.addEventListener('click', handleClick);
    ramenMenu.appendChild(img);
});
 }

 function handleClick(event){
    const ramenId = event.target.dataset.id;
    const ramen = ramens.find(r => r.id == ramenId);
    if (ramen) {
        document.getElementById('detail-image').src = ramen.image;
        document.getElementById('detail-name').textContent = ramen.name;
        document.getElementById('detail-restaurant').textContent = ramen.restaurant;
        document.getElementById('detail-rating').textContent = ramen.rating;
        document.getElementById('detail-comment').textContent = ramen.comment;
    }
 }

 function addSubmitListener(){
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit',event => {
      event.preventDefault();
      const newRamen ={
        id: ramens.length + 1,
        name: document.getElementById('new-name').value,
        restaurant: document.getElementById('new-restaurant').value,
        image: document.getElementById('new-image').value,
        rating: parseInt(document.getElementById('new-rating').value),
        comment: document.getElementById('new-comment').value
      };

      ramens.push(newRamen);
      const img = document.createElement('img');
      img.scr = newRamen.image;
      img.dataset.id = newRamen.id;
      img.addEventListener('click',handleClick);
      document.getElementById('ramen-menu').appendChild(img);
      form.reset();
    })
 }

 function main(){
    displayRamens();
    addSubmitListener();
 }
 document.addEventListener('DOMContentLoaded',main);