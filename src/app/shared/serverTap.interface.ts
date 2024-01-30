export interface ServerInfo {
  name: string
  motd: string
  version: string
  bukkitVersion: string
  tps: string
  health: ServerHealth
  bannedIps: any[]
  bannedPlayers: any[]
  whitelistedPlayers: any[]
  maxPlayers: number
  onlinePlayers: number
}

export interface ServerHealth {
  cpus: number
  uptime: number
  totalMemory: number
  maxMemory: number
  freeMemory: number
}
export interface Plugins {
  name: string
  enabled: boolean
  version: string
  website: string
  authors: string[]
  depends: any[]
  softDepends: string[]
  apiVersion: string
  description: string
}
export interface OnlinePlayers {
  uuid: string
  displayName: string
  address: string
  port: number
  exhaustion: number
  exp: number
  whitelisted: boolean
  banned: boolean
  op: boolean
  location: number[]
  dimension: string
  health: number
  hunger: number
  saturation: number
  gamemode: string
  lastPlayed: number
}
