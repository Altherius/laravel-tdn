<?php

namespace App\Services\Elo;

use App\Enum\FootballMatchResult;

class Elo
{
    private const K = 80;

    public function getEloExchange(int $hostingTeamRating, int $receivingTeamRating, FootballMatchResult $result): int
    {
        $eloDiff = $hostingTeamRating - $receivingTeamRating;
        if (abs($eloDiff) > 400) {
            $eloDiff = $eloDiff > 0 ? 400 : -400;
        }

        $winProbability = 1 / (1 + (10 ** (-$eloDiff / 400)));

        return match ($result) {
            FootballMatchResult::LOSS => ceil(self::K * -$winProbability),
            FootballMatchResult::DRAW => self::K * (.5 - $winProbability),
            FootballMatchResult::WIN => floor(self::K * (1 - $winProbability))
        };
    }
}
