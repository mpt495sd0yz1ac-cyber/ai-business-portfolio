const nameInput = document.getElementById('userName');
const emailInput = document.getElementById('userEmail');
const button = document.querySelector('.button-apply');
const buttonSub = document.getElementById('buttonSub');
const buttonMain = document.getElementById('buttonMain');

button.addEventListener('click', function(e) {
  const isNameFilled = nameInput.value.trim() !== '';
  const isEmailFilled = emailInput.value.trim() !== '';

  if (isNameFilled && isEmailFilled) {
    button.classList.add('is-active');
    buttonSub.style.display = 'none';
    buttonMain.textContent = '参加者特典GET！';
  } else {
    // 入力が足りない場合は色を変えず、アラートを出す例
    alert('氏名とメールアドレスを入力してください');
  }
});
