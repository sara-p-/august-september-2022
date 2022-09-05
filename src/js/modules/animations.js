import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin.js'
import { SplitText } from 'gsap/SplitText.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger)

export default function animations() {
  // Testing out the TextPlugin

  // Hero
  const heroText = document.querySelectorAll('#hero .split-text')
  const splitHero = new SplitText(heroText, { type: 'chars' })
  gsap.from(splitHero.chars, {
    duration: 1.5,
    opacity: 0,
    stagger: 0.1,
  })

  // Sink
  const sinkText = document.querySelectorAll('#sink .split-text')
  const splitSink = new SplitText(sinkText, { type: 'chars' })
  gsap.from(splitSink.chars, {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
  })
}
