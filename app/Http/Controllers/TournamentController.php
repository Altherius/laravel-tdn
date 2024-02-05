<?php

namespace App\Http\Controllers;

use App\Models\Tournament;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TournamentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tournaments/Index', [
            'tournaments' => Tournament::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tournaments/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        $tournament = new Tournament();
        $tournament->name = $request->name;
        $tournament->begins_at = $request->begins_at;
        $tournament->ends_at = $request->ends_at;

        $tournament->save();

        return to_route('tournaments.show', $tournament->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        return Inertia::render('Tournaments/Show', [
            'tournament' => Tournament::with(['matches', 'matches.hostingTeam', 'matches.receivingTeam'])->find($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tournament $tournament)
    {
        return Inertia::render('Tournaments/Edit', [
            'tournament' => $tournament,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tournament $tournament)
    {
        $tournament->name = $request->name;
        $tournament->begins_at = $request->begins_at;
        $tournament->ends_at = $request->ends_at;

        $tournament->save();

        return to_route('tournaments.show', $tournament->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tournament $tournament)
    {
        $tournament->delete();

        return to_route('tournaments.index');
    }
}
