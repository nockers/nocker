import { Project } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

/**
 * プロジェクト
 */
export class ClientProject extends Client {
  constructor(config: Config) {
    super(config)
  }

  /**
   * ヘルプを取得する
   * @returns
   */
  async read() {
    const project = await this.call<Project, null>({
      method: "GET",
      path: `?environment=${this.environment}`,
    })

    this.updateWidgetConfig(project.widgetConfig)

    this.updateHelps(project.helps)

    return project
  }
}
