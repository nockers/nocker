import { Knockr } from "../knockr"

describe("Emotion", () => {
  test("login", async () => {
    const knockr = new Knockr({
      projectId: "xxxxxxxxxxxxxxxxxxxxx",
    })

    const login = await knockr.login()

    if (login instanceof Error) {
      throw login
    }

    expect(login.customer.projectId).toBe("xxxxxxxxxxxxxxxxxxxxx")
  })
})
