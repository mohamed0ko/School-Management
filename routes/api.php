<?php

use App\Http\Controllers\StudentParentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'ability:student'])->prefix('student')->group(static function () {

    Route::get('/', function (Request $request) {
        return $request->user();
    });
});
Route::middleware(['auth:sanctum', 'ability:admin'])->prefix('admin')->group(static function () {
    Route::apiResources([
        'parent' => StudentParentController::class,
    ]);

    Route::get('/', function (Request $request) {
        return $request->user();
    });
});
Route::middleware(['auth:sanctum', 'ability:teacher'])->prefix('teacher')->group(static function () {

    Route::get('/', function (Request $request) {
        return $request->user();
    });
});
