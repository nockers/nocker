import { useEffect } from "react"

export const useResize = (eventListener: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", eventListener)

    eventListener()

    return () => {
      window.removeEventListener("resize", eventListener)
    }
  }, [])
}
