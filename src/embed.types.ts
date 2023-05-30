import { EmbedJobConfig } from "./types"

export interface EmbedCol{
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

export interface EmbedConfig extends EmbedJobConfig{
    cols: EmbedCol
}