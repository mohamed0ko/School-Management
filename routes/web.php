<?php

use App\Http\Controllers\StudentParentController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});



require __DIR__ . '/auth.php';
