<?php

use App\Http\Controllers\StudentParentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum,admin,teacher'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResources([
    'parent' => StudentParentController::class,
]);
