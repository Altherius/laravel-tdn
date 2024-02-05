<?php

namespace App\Models;

use App\Enum\FootballMatchResult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FootballMatch extends Model
{
    use HasFactory;

    public function hostingTeam(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'hosting_team_id');
    }

    public function tournament(): BelongsTo
    {
        return $this->belongsTo(Tournament::class, 'tournament_id');
    }

    public function receivingTeam(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'receiving_team_id');
    }

    public function getResult(): FootballMatchResult
    {
        return match ($this->hosting_team_score <=> $this->receiving_team_score) {
            -1 => FootballMatchResult::LOSS,
            0 => FootballMatchResult::DRAW,
            1 => FootballMatchResult::WIN
        };
    }
}
