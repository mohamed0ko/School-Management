<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Teacher;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory(10)->create();

        User::factory()->create([
            'name' => 'TestMohamed',
            'email' => 'mohamed@gmail.com',
            'password' => '123456789',
        ]);
        Admin::factory()->create([
            'fristname' => 'admin',
            'lastname' => 'admin',
            'date_of_birth' => fake()->date(),
            'address' => fake()->address(),
            'phone' => substr(fake()->phoneNumber(),10),
            'email' => 'admin@gmail.com',
            'password' => '$2y$12$BdSsuftmIuNwP5bO7Rps0ec.P8LAV4wUti7wExx2/ckEEmW1UAv8a',
        ]); Teacher::factory()->create([
            'fristname' => 'teacher',
            'lastname' => 'teacher',
            'date_of_birth' => fake()->date(),
            'address' => fake()->address(),
            'phone' => substr(fake()->phoneNumber(),10),
            'email' => 'teacher@gmail.com',
            'password' => '$2y$12$BdSsuftmIuNwP5bO7Rps0ec.P8LAV4wUti7wExx2/ckEEmW1UAv8a',
        ]);
    }
}
