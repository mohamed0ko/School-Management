<?php

namespace App\Http\Requests;

use App\Enum\EnumBlood;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreTeacherRequest extends FormRequest
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
            'date_of_birth' => 'required|date',
            'gender' => ['required', Rule::in(['m', 'f'])],
            'bloode_type' => ['required', Rule::enum(EnumBlood::class)],
            'address' => 'required|max:255',
            'phone' => 'required|max:10',
            'email' => 'required|email',
            'password' => 'required|string|min:8',

        ];
    }
}
