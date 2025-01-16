<?php

namespace App\Http\Requests;

use App\Enum\EnumBlood;
use App\Models\StudentParent;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fristname' => 'required|max:55',
            'lastname' => 'required|max:55',
            'student_parent_id' => Rule::exists(StudentParent::class, 'id'),
            'date_of_birth' => 'required|date',
            'gender' => ['required', Rule::in(['m', 'f'])],
            'bloode_type' => ['required', Rule::enum(EnumBlood::class)],
            'address' => 'required|max:255',
            'phone' => 'required|max:10|unique:student_parents',
            'email' =>  'required|email|unique:student_parents',
            'password' => 'required',
        ];
    }
}
