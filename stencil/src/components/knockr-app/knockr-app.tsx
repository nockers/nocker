import { Component, h, State } from "@stencil/core"

@Component({
  tag: "knockr-app",
  styleUrl: "knockr-app.css",
  shadow: true,
})
export class KnockrApp {
  @State() feedbackText = ""

  render() {
    return (
      <div>
        <textarea
          value={this.feedbackText}
          onInput={(event: any) => {
            this.feedbackText = event.target.value
          }}
        />
      </div>
    )
  }
}
