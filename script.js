const dice = document.querySelector('.dice-icon');
const adviceEl = document.querySelector('.advice');
const idEl = document.querySelector('.number');

const renderSpinner = function () {
  adviceEl.innerHTML = `<div class="spinner">
    <i class="icon ph ph-spinner"></i>
  </div>`;
  idEl.textContent = ``;
};

dice.addEventListener('click', async (e) => {
  const btn = e.target.closest('.dice-icon');
  if (!btn) return;

  renderSpinner();

  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();

  const { advice, id } = data.slip;

  adviceEl.textContent = `"${advice}"`;
  idEl.textContent = `Advice # ${id}`;
});
