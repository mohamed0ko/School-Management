<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentParent extends Model
{
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
}
