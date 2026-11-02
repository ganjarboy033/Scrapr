const input=document.getElementById('videoUrl');
const error=document.getElementById('error');
let service='snapyt';
document.querySelectorAll('.service').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.service').forEach(x=>x.classList.remove('selected'));
  btn.classList.add('selected'); service=btn.dataset.service;
}));
document.getElementById('pasteBtn').addEventListener('click',async()=>{
  try{input.value=await navigator.clipboard.readText();error.textContent='';}
  catch(e){input.focus();error.textContent='Clipboard tidak bisa diakses. Tempel tautan secara manual.';}
});
function validYouTubeUrl(value){
  try{
    const u=new URL(value);
    return ['youtube.com','www.youtube.com','m.youtube.com','youtu.be','www.youtu.be','youtube-nocookie.com','www.youtube-nocookie.com'].includes(u.hostname.toLowerCase()) && (u.protocol==='https:'||u.protocol==='http:');
  }catch(e){return false;}
}
document.getElementById('goBtn').addEventListener('click',()=>{
  const value=input.value.trim();
  if(!validYouTubeUrl(value)){error.textContent='Masukkan tautan YouTube yang valid terlebih dahulu.';input.focus();return;}
  error.textContent='';
  const destination=service==='snapyt'?'https://www.snapyt.app/':'https://ssyoutube.me/';
  window.open(destination,'_blank','noopener,noreferrer');
  try{navigator.clipboard.writeText(value);}catch(e){}
});
document.getElementById('themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));
input.addEventListener('input',()=>error.textContent='');
