import { Route } from 'react-router-dom'

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

declare namespace nightKay {
  function registerApplication(name: string, app: ApplicationItem): void
  function registerRoutes(name: string, routes: ComponentItem[]): void

  function routes(): Route[]

  function define(name: string, module: any): void
  function require(name: string): any

  const utils = {
    getPublicPath(): string
  }
}

export = nightKay
