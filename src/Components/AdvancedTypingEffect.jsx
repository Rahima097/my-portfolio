"use client"

import { useState, useEffect } from "react"

const AdvancedTypingEffect = ({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  showCursor = true,
  cursorChar = "|",
  cursorClassName = "animate-pulse text-pink-500",
  loop = true,
  onComplete = null,
}) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete && !loop) return

    const currentText = texts[currentIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Finished typing current text
          if (currentIndex === texts.length - 1 && !loop) {
            setIsComplete(true)
            if (onComplete) onComplete()
            return
          }
          // Wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [
    displayText,
    currentIndex,
    isDeleting,
    isComplete,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    loop,
    onComplete,
  ])

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className={cursorClassName}>{cursorChar}</span>}
    </span>
  )
}

export default AdvancedTypingEffect
