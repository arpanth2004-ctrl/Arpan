
// Accessible basic carousel
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((c) => {
    const track = c.querySelector('.carousel-track');
    const slides = Array.from(c.querySelectorAll('.slide'));
    const prev = c.querySelector('.carousel-prev');
    const next = c.querySelector('.carousel-next');
    const dots = c.querySelector('.carousel-dots');
    let index = 0;
    function update(){
      track.style.transform = `translateX(-${index*100}%)`;
      dots.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-selected', i===index ? 'true':'false'));
    }
    slides.forEach((_,i)=>{
      const b=document.createElement('button');
      b.setAttribute('aria-label', `Slide ${i+1}`);
      b.addEventListener('click', ()=>{index=i;update();});
      dots.appendChild(b);
    });
    prev?.addEventListener('click', ()=>{index=(index-1+slides.length)%slides.length;update();});
    next?.addEventListener('click', ()=>{index=(index+1)%slides.length;update();});
    update();
    // Autoplay
    if (c.dataset.autoplay === 'true') {
      const interval = Number(c.dataset.interval||5000);
      setInterval(()=>{index=(index+1)%slides.length;update();}, interval);
    }
  });
});
