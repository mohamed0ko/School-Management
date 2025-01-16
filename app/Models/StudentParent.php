<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class StudentParent extends  Authenticable
{
    use HasApiTokens, HasFactory, SoftDeletes;
    protected $fillable = [
        'fristname',
        'lastname',
        'date_of_birth',
        'gender',
        'bloode_type',
        'last_login_date',
        'address',
        'phone',
        'email',
        'password',


    ];
    protected $hidden = [
        'password',
        'last_login_date',
        "email_verified_at",
        "remember_token",
        "deleted_at",

    ];
    protected $casts = [
        'date_of_birth' => 'date:Y-m-d',
    ];
    protected $appends = ['role'];
    public function getRoleAttribute()
    {
        return 'parent';
    }
}
