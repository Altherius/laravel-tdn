<?php

namespace Database\Factories;

use DateInterval;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tournament>
 */
class TournamentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $beginsAt = fake()->dateTimeThisYear;

        return [
            'name' => fake()->country,
            'begins_at' => $beginsAt,
            'ends_at' => $beginsAt->add(new DateInterval('P1M')),
        ];
    }
}
