import { useEffect } from "react"

export const useResize = (eventListener: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", eventListener)

    const id = setInterval(() => {
      eventListener()
    }, 1000)

    return () => {
      window.removeEventListener("resize", eventListener)
      clearInterval(id)
    }
  }, [])
}
