const smallTanks = document.querySelectorAll('.tank-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const totalCapacity = 20;
const smallCupCapacity = 2.5;
const tankHeight = 330;

updateTank();

smallTanks.forEach((tank, index) => {
  tank.addEventListener('click', () => highlightTanks(index));
});

function highlightTanks(selectedTank) {
  if (
    smallTanks[selectedTank].classList.contains('full') &&
    !smallTanks[selectedTank].nextElementSibling.classList.contains('full')
  ) {
    selectedTank--;
  }

  smallTanks.forEach((tank, index) => {
    if (index <= selectedTank) {
      tank.classList.add('full');
    } else {
      tank.classList.remove('full');
    }
  });

  updateTank();
}

function updateTank() {
  const fullTanks = document.querySelectorAll('.tank-small.full').length;
  const tanksTotal = smallTanks.length;

  if (fullTanks === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullTanks / tanksTotal) * tankHeight}px`;
    percentage.innerText = `${(fullTanks / tanksTotal) * 100}%`;
  }

  if (fullTanks === tanksTotal) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else {
    remained.style.visibility = 'visible';
    litres.innerText = `${totalCapacity - (smallCupCapacity * fullTanks)}L`;
  }
}
