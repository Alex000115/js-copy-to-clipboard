function copy(){
  const text = document.getElementById('text');
  text.select();
  document.execCommand('copy');
  document.getElementById('msg').innerText = 'Copied!';
}
