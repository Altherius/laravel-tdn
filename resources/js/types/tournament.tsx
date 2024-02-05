import {Match} from "@/types/match";

export interface Tournament {
    id: number
    name: string
    begins_at: Date
    ends_at: Date
    matches: Array<Match>
}
