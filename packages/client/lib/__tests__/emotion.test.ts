import { Nocker } from "../nocker"

describe("Emotion", () => {
  test("login", async () => {
    const nocker = new Nocker({
      projectId: "xxxxxxxxxxxxxxxxxxxxx",
    })

    const login = await nocker.login()

    if (login instanceof Error) {
      throw login
    }

    expect(login.customer.projectId).toBe("xxxxxxxxxxxxxxxxxxxxx")
  })
})
