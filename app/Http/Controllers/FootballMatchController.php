<?php

namespace App\Http\Controllers;

use App\Models\FootballMatch;
use App\Models\Team;
use App\Services\Elo\Elo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FootballMatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $matches = FootballMatch::with(['hostingTeam', 'receivingTeam'])->get();

        return Inertia::render('Matches/Index', [
            'matches' => $matches,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Matches/Create', [
            'teams' => Team::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Elo $elo)
    {
        $footballMatch = new FootballMatch();

        $footballMatch->hosting_team_id = $request->hosting_team_id;
        $footballMatch->receiving_team_id = $request->receiving_team_id;
        $footballMatch->hosting_team_score = $request->hosting_team_score;
        $footballMatch->receiving_team_score = $request->receiving_team_score;
        $footballMatch->description = $request->description;

        $eloPointsExchanged = $elo->getEloExchange(
            $footballMatch->hostingTeam->rating,
            $footballMatch->receivingTeam->rating,
            $footballMatch->getResult()
        );

        $footballMatch->hostingTeam->rating += $eloPointsExchanged;
        $footballMatch->receivingTeam->rating -= $eloPointsExchanged;

        $footballMatch->save();
        $footballMatch->hostingTeam->save();
        $footballMatch->receivingTeam->save();

        return to_route('matches.show', $footballMatch->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        return Inertia::render('Matches/Show', [
            'match' => FootballMatch::with(['hostingTeam', 'receivingTeam'])->find($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FootballMatch $footballMatch)
    {
        return Inertia::render('Matches/Create', [
            'teams' => Team::all(),
            'match' => $footballMatch,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FootballMatch $footballMatch)
    {
        $footballMatch->description = $request->description;
        $footballMatch->save();

        return to_route('matches.show', $footballMatch->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FootballMatch $footballMatch)
    {
        $footballMatch->delete();

        return to_route('matches.index');
    }
}
