import { getPublicStatsBots } from "./getPublicStatsBots"
import { Bot } from "../types"

export const getBots = async (): Promise<Bot[]> => {
  const sdk = new getPublicStatsBots("")

  return await sdk.getPublicStats()
}
