<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentParentController;
use App\Http\Controllers\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(static function () {
    Route::get('/me', function (Request $request) {
        return $request->user();
    });
});

Route::middleware(['auth:sanctum', 'ability:student'])->prefix('student')->group(static function () {});
Route::middleware(['auth:sanctum', 'ability:admin'])->prefix('admin')->group(static function () {
    Route::apiResources([
        'parent' => StudentParentController::class,
        'student' => StudentController::class,
        'teacher' => TeacherController::class,

    ]);
});
Route::middleware(['auth:sanctum', 'ability:teacher'])->prefix('teacher')->group(static function () {});
