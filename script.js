document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('lostFoundForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const desc = this.querySelector('input[type="text"]').value;
    const category = this.querySelector('select').value;
    const div = document.createElement('div');
    div.textContent = `${category.toUpperCase()}: ${desc}`;
    document.getElementById('lostFoundList').appendChild(div);
    this.reset();
  });

  document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelectorAll('input[type="text"]')[0].value;
    const desc = this.querySelectorAll('input[type="text"]')[1].value;
    const div = document.createElement('div');
    div.innerHTML = `<strong>${name}</strong>: ${desc}`;
    document.getElementById('productList').appendChild(div);
    this.reset();
  });

  document.getElementById('documentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = this.querySelector('input[type="text"]').value;
    const access = this.querySelector('select').value;
    const div = document.createElement('div');
    div.textContent = `Document: ${title} (${access})`;
    document.getElementById('documentList').appendChild(div);
    this.reset();
  });

  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login feature is currently in demo mode.');
  });
});
