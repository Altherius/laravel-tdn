<?php

namespace FootballMatch;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FootballMatchTest extends TestCase
{
    use RefreshDatabase;

    public function test_matches_index_can_be_rendered(): void
    {
        $response = $this->get('/matches');

        $response->assertStatus(200);
    }

    public function test_match_create_form_can_be_rendered(): void
    {
        $response = $this->get('/matches/create');

        $response->assertStatus(200);
    }
}
