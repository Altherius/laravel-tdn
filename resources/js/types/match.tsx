import {Team} from "@/types/team";

export interface Match {
    id: number
    hosting_team: Team
    receiving_team: Team
    hosting_team_score: number
    receiving_team_score: number
    description: string
}
