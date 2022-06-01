export const useEmotionColor = (emotion: number | null) => {
  if (emotion === null) {
    return "info"
  }

  /**
   * 0, 1
   */
  if (emotion === 0 || emotion === 1) {
    return "error"
  }

  /**
   * 3, 4
   */
  if (emotion === 3 || emotion === 4) {
    return "success"
  }

  /**
   * 2
   */
  return "info"
}
