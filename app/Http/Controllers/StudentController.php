<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\StudentResource;
use DateTime;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): AnonymousResourceCollection
    {

        return StudentResource::collection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        $from = $request->validated();
        $from['password'] = bcrypt($from['password']);
        $from['last_login_date'] = new DateTime();
        $student = User::create($from);
        $response = new StudentResource($student);
        return response()->json([
            'student' => $response,
            'message' => __('Parent created successfully')
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $student): JsonResponse
    {

        $from = $request->validated();
        $from['password'] = bcrypt($from['password']);
        $student->update($from);
        return response()->json([
            'student' => new StudentResource($student),
            'message' => __('student updated successfully')
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $student)
    {
        $student->delete();
        return new StudentResource($student);
    }
}
