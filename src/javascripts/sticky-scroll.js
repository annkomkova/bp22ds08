import '../stylesheets/sticky-scroll.css'

document.addEventListener('DOMContentLoaded', () => {
  changeTitle()
  changeProgressBar()
})

function changeTitle() {
  const stickyTitle = document.querySelector('.stickyTitle')
  const sections = document.querySelectorAll('.section')

  const obeserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stickyTitle.textContent = entry.target.dataset.title
        }
      })
    },
    { threshold: 0.5 }
  )

  sections.forEach((section) => {
    obeserver.observe(section)
  })
}
function changeProgressBar() {
  const progressBarFill = document.querySelector('.progressBarFill')

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    const progress = (scrollTop / docHeight) * 100

    progressBarFill.style.width = progress + '%'
  })
}
