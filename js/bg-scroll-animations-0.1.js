let scrollPosition = 0

window.addEventListener('scroll', (event) => {
  toggleCardVisibility()
})

// Page scroll position as an integer between 0-99 
function calculateScrollPosition() {
  oldScrollPosition = scrollPosition
  el = document.scrollingElement
  scrollPosition = Math.floor((el.scrollTop / el.scrollHeight) * 100)
  return oldScrollPosition, scrollPosition
}

// Turn card group visibility on/off based on scroll position
// This is kinda buggy when reversing direction mid-page
function toggleCardVisibility() {
  calculateScrollPosition()
  els = document.querySelectorAll(('.group' + scrollPosition))

  // Toggle visibility on new scroll positions
  if (scrollPosition != oldScrollPosition) {
    els.forEach(el => 
      // 'opacity-0' is a Tailwind CSS utility class
      el.classList.toggle('opacity-0')
    )
  }

  // Reset all at top of page (bug fix)
  if (scrollPosition == 0) {
    allCards = document.querySelectorAll('div[class*="group"]')
    allCards.forEach(card => {
      card.classList.remove('opacity-0')
    })
  }

  // Hide all at bottom of page (bug fix)
  if (scrollPosition >= 75) {
    allCards = document.querySelectorAll('div[class*="group"]')
    allCards.forEach(card => {
      card.classList.add('opacity-0')
    })
  }
}
