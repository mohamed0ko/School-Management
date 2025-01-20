<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Http\Resources\TeacherResource;
use DateTime;
use Illuminate\Http\JsonResponse;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TeacherResource::collection(Teacher::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeacherRequest $request): JsonResponse
    {
        $from = $request->validated();
        $from['password'] = bcrypt($from['password']);
        $teacher = Teacher::create($from);
        $response = new TeacherResource($teacher);
        return response()->json([
            'teacher' => $response,
            'message' => __('Parent created successfully')
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeacherRequest $request, Teacher $teacher)
    {

        $form = $request->validated();
        $form['password'] = bcrypt($form['password']);
        $teacher->update($form);
        return response()->json([
            'teacher' => $teacher,
            'message' => __('teacher updated successfully')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return new TeacherResource($teacher);
    }
}
