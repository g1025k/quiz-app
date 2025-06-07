document.querySelectorAll('.option').forEach(button => {
  button.addEventListener('click', () => {
    alert('選択されました: ' + button.textContent);
  });
});