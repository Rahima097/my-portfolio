"use client"

import { useState, useEffect } from "react"

const TypingAnimation = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
  cursorColor = "text-pink-500",
}) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed)

  useEffect(() => {
    const currentText = texts[currentIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
          setCurrentSpeed(typingSpeed + Math.random() * 50) // Variable speed for natural feel
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true)
            setCurrentSpeed(deletingSpeed)
          }, pauseTime)
          return
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
          setCurrentSpeed(deletingSpeed)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          setCurrentSpeed(typingSpeed)
        }
      }
    }

    const timer = setTimeout(handleTyping, currentSpeed)
    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting, currentSpeed, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {displayText}
      <span className={`animate-pulse ${cursorColor} font-bold ml-1`}>|</span>
    </span>
  )
}

export default TypingAnimation
