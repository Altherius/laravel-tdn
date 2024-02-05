<?php

namespace Tournament;

use App\Models\Team;
use App\Models\Tournament;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TournamentTest extends TestCase
{
    use RefreshDatabase;

    public function test_tournaments_index_can_be_rendered(): void
    {
        $response = $this->get('/tournaments');

        $response->assertStatus(200);
    }

    public function test_tournaments_create_form_can_be_rendered(): void
    {
        $response = $this->get('/tournaments/create');

        $response->assertStatus(200);
    }

    public function test_tournaments_can_be_created(): void
    {
        $this->post('/tournaments', [
            'name' => 'Test tournament',
        ]);

        $this->assertDatabaseHas('tournaments', [
            'name' => 'Test tournament',
        ]);
    }

    public function test_tournament_creation_redirects_to_show_page(): void
    {
        $response = $this->post('/tournaments', [
            'name' => 'Test tournament',
        ]);

        $team = Tournament::where('name', 'Test tournament')->first();
        $response->assertRedirectToRoute('tournaments.show', $team->id);
    }
}
