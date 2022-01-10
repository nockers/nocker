import { Component, h, State } from "@stencil/core"

@Component({
  tag: "knockr-fab",
  styleUrl: "knockr-fab.css",
  shadow: true,
})
export class MyComponent {
  @State() isOpen = false

  onOpen() {
    this.isOpen = true
  }

  render() {
    if (!this.isOpen) {
      return (
        <div class={"fab"}>
          <button onClick={this.onOpen.bind(this)}>
            {"何かお困りですか？"}
          </button>
        </div>
      )
    }

    return <knockr-app></knockr-app>
  }
}
