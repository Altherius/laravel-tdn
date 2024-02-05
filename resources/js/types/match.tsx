import {Team} from "@/types/team";
import {Tournament} from "@/types/tournament";

export interface Match {
    id: number
    hosting_team: Team
    receiving_team: Team
    tournament: Tournament
    hosting_team_score: number
    receiving_team_score: number
    description: string
}
