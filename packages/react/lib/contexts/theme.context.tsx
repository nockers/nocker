import { createContext } from "react"

export const ThemeContext = createContext({
  buttonSubmit:
    "py-1 rounded-md w-full bg-nocker-500 text-white text-slate-50 outline-0 hover:bg-nocker-600 hover:bg-nocker-600 focus:outline-none focus:ring focus:ring-nocker-300 active:bg-nocker-700",
})
