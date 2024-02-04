<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        $roles = [
            ['name' => 'Согласовано руководителем', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Заявка отклонена', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach ($roles as $role) {
            DB::table('roles')->insert($role);
        }


        $statuses = [
            ['name' => 'Согласовано руководителем', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Заявка отклонена', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach ($statuses as $status) {
            DB::table('statuses')->insert($status);
        }

        $tasks = [
            ['title' => 'AA1', 'description' => '1С Бухгалтерия', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => 'BB1', 'description' => 'Личный кабинет', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach ($tasks as $task) {
            DB::table('tasks')->insert($task);
        }

    }
}
