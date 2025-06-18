// Animate skill bars when in view
function animateSkills() {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const skill = bar.classList.contains('html') ? '90%' :
                  bar.classList.contains('css') ? '80%' :
                  bar.classList.contains('js') ? '70%' : '0';
    bar.style.width = skill;
  });
}

// Detect scroll and trigger animation
window.addEventListener('scroll', () => {
  const section = document.querySelector('#skills');
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (position < screenHeight - 100) {
    animateSkills();
  }
});
