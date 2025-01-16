<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('fristname', 50);
            $table->string('lastname', 50);
            $table->dateTime('date_of_birth')->nullable();
            $table->dateTime('last_login_date')->nullable();
            $table->enum('gender', ['m', 'f']);
            $table->string('address');
            $table->string('phone', 10)->unique()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name');
            $table->dropColumn('fristname', 50);
            $table->dropColumn('lastname', 50);
            $table->dropColumn('date_of_birth');
            $table->dropColumn('gender', ['m', 'f']);
            $table->dropColumn('address');
            $table->dropColumn('phone', 10)->unique();
        });
    }
};
