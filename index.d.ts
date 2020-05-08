import { Route } from 'react-router-dom'

interface LooseObject {
  [key: string]: any
}

interface ComponentItem {
  path: string
  exact?: boolean
  component: any
}

interface ApplicationItem {
  path: string
  entry: string
  exact?: boolean
  routes?: ComponentItem[]
}

interface NormalizedApplicationItem extends ApplicationItem {
  name: string
  entry: {
    script: string
    css?: string
  }
  _config: LooseObject
}

declare namespace nightKay {
  function registerApplication(name: string, app: ApplicationItem, config: LooseObject): void
  function registerRoutes(name: string, routes: ComponentItem[]): void

  function routes(): Route[]

  function getApplication(name: string): NormalizedApplicationItem
  function getApplicationConfig(name: string): LooseObject | null

  function define(name: string, module: any): void
  function require(name: string): any

  const utils = {
    getPublicPath(): string
  }
}

export = nightKay
