
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href'); if(id.length>1){
      e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
});
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if((path==='index.html' && href.endsWith('index.html')) || path===href){
      a.classList.add('active');
    }
  });
})();
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.transform='translateY(0)';
      entry.target.style.opacity='1';
    }
  })
},{threshold:.12});
document.querySelectorAll('.card').forEach(el=>{
  el.style.transform='translateY(8px)'; el.style.opacity='.0'; el.style.transition='all .5s ease';
  observer.observe(el);
});
window.applyFilter = function(tag){
  document.querySelectorAll('.badge').forEach(b=>b.classList.remove('active'));
  const current = document.querySelector(`[data-tag="${tag}"]`);
  if(current) current.classList.add('active');
  document.querySelectorAll('[data-tags]').forEach(card=>{
    const tags = card.getAttribute('data-tags').split(',');
    card.style.display = (tag==='all' || tags.includes(tag)) ? '' : 'none';
  });
}
