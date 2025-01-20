<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticable;
use Laravel\Sanctum\HasApiTokens;

class Teacher extends Authenticable
{
    use HasApiTokens, HasFactory, SoftDeletes;
    protected $fillable = [
        'fristname',
        'lastname',
        'date_of_birth',
        'gender',
        'bloode_type',
        'address',
        'phone',
        'email',
        'password',
    ];
    protected $appends = ['role'];
    protected $casts = [
        'date_of_birth' => 'date:Y-m-d',
    ];
    protected $hidden = [
        'password',
        'last_login_date',
        "email_verified_at",
        "remember_token",
        "deleted_at",

    ];
    public function getRoleAttribute()
    {
        return 'teacher';
    }
}
