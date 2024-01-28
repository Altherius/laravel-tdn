<?php

namespace Elo;

use App\Enum\FootballMatchResult;
use App\Services\Elo\Elo;
use Tests\TestCase;

class EloTest extends TestCase
{
    public function test_exchanged_points_between_two_equals_teams_draw_is_zero(): void
    {
        $elo = new Elo();

        $this->assertEquals(0, $elo->getEloExchange(1000, 1000, FootballMatchResult::DRAW));
    }

    public function test_winner_gained_points_between_two_equals_teams_win_is_half_k(): void
    {
        $elo = new Elo();

        $this->assertEquals(40, $elo->getEloExchange(1000, 1000, FootballMatchResult::WIN));
        $this->assertEquals(-40, $elo->getEloExchange(1000, 1000, FootballMatchResult::LOSS));
    }

    public function test_total_exchanged_points_between_two_equals_teams_win_is_k(): void
    {
        $elo = new Elo();

        $gained = $elo->getEloExchange(1000, 1000, FootballMatchResult::WIN);
        $lost = $elo->getEloExchange(1000, 1000, FootballMatchResult::LOSS);

        $this->assertEquals(80, abs($gained) + abs($lost));
    }

    public function test_exchanged_points_between_two_400_elo_diff_teams_win_is_90_percent_of_k(): void
    {
        $elo = new Elo();

        $this->assertEquals(72, $elo->getEloExchange(1000, 1400, FootballMatchResult::WIN));
    }

    public function test_exchanged_points_does_not_evolve_after_400_elo_diff(): void
    {
        $elo = new Elo();

        $eloDiff400 = $elo->getEloExchange(1000, 1400, FootballMatchResult::WIN);
        $eloDiff800 = $elo->getEloExchange(1000, 1800, FootballMatchResult::WIN);

        $this->assertEquals($eloDiff400, $eloDiff800);

        $eloDiff400 = $elo->getEloExchange(1400, 1000, FootballMatchResult::WIN);
        $eloDiff800 = $elo->getEloExchange(1800, 1000, FootballMatchResult::WIN);

        $this->assertEquals($eloDiff400, $eloDiff800);
    }
}
