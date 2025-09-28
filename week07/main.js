const cardContainer = document.getElementById("cardContainer");
const colorButtons = document.querySelectorAll(".colorCardBtn"); 

const colors = ['red', 'yellow', 'blue'];

colorButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    const cards = cardContainer.querySelectorAll('.card');

    cards[index].style.background = colors[index]; 

  });
});
