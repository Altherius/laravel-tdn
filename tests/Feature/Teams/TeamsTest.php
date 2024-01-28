<?php

namespace Teams;

use App\Models\Team;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TeamsTest extends TestCase
{
    use RefreshDatabase;

    public function test_teams_index_can_be_rendered(): void
    {
        $response = $this->get('/teams');

        $response->assertStatus(200);
    }

    public function test_teams_create_form_can_be_rendered(): void
    {
        $response = $this->get('/teams/create');

        $response->assertStatus(200);
    }

    public function test_teams_can_be_created(): void
    {
        $this->post('/teams', [
            'name' => 'Test team'
        ]);

        $this->assertDatabaseHas('teams', [
            'name' => 'Test team',
        ]);
    }

    public function test_team_creation_redirects_to_show_page(): void
    {
        $response = $this->post('/teams', [
            'name' => 'Test team'
        ]);

        $team = Team::where('name', 'Test team')->first();
        $response->assertRedirectToRoute('teams.show', $team->id);
    }
}
