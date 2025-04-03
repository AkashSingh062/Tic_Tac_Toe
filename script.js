let checked = false;
let win = false;
let count = 0;

function checkWinCondition() {
  count++;
  if ((document.querySelector('.btn-1').textContent === 'X' && document.querySelector('.btn-2').textContent === 'X' && document.querySelector('.btn-3').textContent === 'X') || (document.querySelector('.btn-4').textContent === 'X' && document.querySelector('.btn-5').textContent === 'X' && document.querySelector('.btn-6').textContent === 'X') || (document.querySelector('.btn-7').textContent === 'X' && document.querySelector('.btn-8').textContent === 'X' && document.querySelector('.btn-9').textContent === 'X') || (document.querySelector('.btn-2').textContent === 'X' && document.querySelector('.btn-5').textContent === 'X' && document.querySelector('.btn-8').textContent === 'X') || (document.querySelector('.btn-3').textContent === 'X' && document.querySelector('.btn-6').textContent === 'X' && document.querySelector('.btn-9').textContent === 'X') || (document.querySelector('.btn-1').textContent === 'X' && document.querySelector('.btn-5').textContent === 'X' && document.querySelector('.btn-9').textContent === 'X') || (document.querySelector('.btn-3').textContent === 'X' && document.querySelector('.btn-5').textContent === 'X' && document.querySelector('.btn-7').textContent === 'X')) {
    document.querySelector('.win').innerHTML = `<p>Player X wins</p>`;
    win = true;
  }
  if ((document.querySelector('.btn-1').textContent === '0' && document.querySelector('.btn-2').textContent === '0' && document.querySelector('.btn-3').textContent === '0') || (document.querySelector('.btn-4').textContent === '0' && document.querySelector('.btn-5').textContent === '0' && document.querySelector('.btn-6').textContent === '0') || (document.querySelector('.btn-7').textContent === '0' && document.querySelector('.btn-8').textContent === '0' && document.querySelector('.btn-9').textContent === '0') || (document.querySelector('.btn-1').textContent === '0' && document.querySelector('.btn-4').textContent === '0' && document.querySelector('.btn-7').textContent === '0') || (document.querySelector('.btn-2').textContent === '0' && document.querySelector('.btn-5').textContent === '0' && document.querySelector('.btn-8').textContent === '0') || (document.querySelector('.btn-3').textContent === '0' && document.querySelector('.btn-6').textContent === '0' && document.querySelector('.btn-9').textContent === '0') || (document.querySelector('.btn-1').textContent === '0' && document.querySelector('.btn-5').textContent === '0' && document.querySelector('.btn-9').textContent === '0') || (document.querySelector('.btn-3').textContent === '0' && document.querySelector('.btn-5').textContent === '0' && document.querySelector('.btn-7').textContent === '0')) {
    document.querySelector('.win').innerHTML = `<p>Player 0 wins</p>`;
    win = true;
  }
  if (win) {
    document.querySelector('.win').style.opacity = 1
    setTimeout(() => {
      document.querySelector('.win').style.opacity = 0
    }, 1500);
    setTimeout(() => {
      checked = true;
      document.querySelectorAll('.btn').forEach((btn) => {
        btn.textContent = '';
      });
      count = 0;
      win = false;
    }, 1500);
  }
  if (count === 9) {
    document.querySelector('.win').style.opacity = 1;
    document.querySelector('.win').innerHTML = `<p>Draw</p>`;
    setTimeout(() => {
      document.querySelector('.win').style.opacity = 0;
    }, 1500);
    setTimeout(() => {
      checked = true;
      document.querySelectorAll('.btn').forEach((btn) => {
        btn.textContent = '';
      });
      win = false;
    }, 1500);
    count = 0;
  }
}

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    if ((btn.textContent === 'X') || (btn.textContent === 'O') || !(btn.textContent === '')) {
      document.querySelector('.error').style.opacity = 1
      setTimeout(() => {
        document.querySelector('.error').style.opacity = 0
      }, 1500);
    }
    else {
      if (checked) {
        btn.textContent = 'X';
        checked = false;
        checkWinCondition();
      }
      else {
        btn.textContent = '0';
        checked = true;
        checkWinCondition();
      }
    }
  });
});