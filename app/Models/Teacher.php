<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticable;
use Laravel\Sanctum\HasApiTokens;

class Teacher extends Authenticable
{
    use HasApiTokens, HasFactory, SoftDeletes;
    protected $appends = ['role'];
    public function getRoleAttribute()
    {
        return 'teacher';
    }
}
