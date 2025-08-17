import "./src/styles/tailwind.css"
import "./src/styles/styles.css"
import "./src/styles/styles.scss"

// Import and initialize smoothscroll polyfill for Safari compatibility
import smoothscroll from 'smoothscroll-polyfill'

// Kick off the polyfill when the browser loads
if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}
