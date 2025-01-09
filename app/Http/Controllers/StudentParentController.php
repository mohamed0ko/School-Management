<?php

namespace App\Http\Controllers;

use App\Models\StudentParent;
use App\Http\Requests\StoreStudentParentRequest;
use App\Http\Requests\UpdateStudentParentRequest;
use App\Http\Resources\StudentParentResource;
use DateTime;
use Illuminate\Support\Facades\Hash;

class StudentParentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return StudentParentResource::collection(StudentParent::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentParentRequest $request)
    {

        $forms = $request->validated();

        $forms['password'] = bcrypt($forms['password']);


        $forms['last_login_date'] = new DateTime();


        $parent = StudentParent::create($forms);
        $response = new StudentParentResource($parent);

        return response()->json([
            'parent' => $response,
            'message' => __('Parent created successfully')
        ]);
    }




    /**
     * Display the specified resource. 
     */
    public function show(StudentParent $studentParent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentParentRequest $request, StudentParent $parent)
    {
        $parent->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentParent $parent)
    {

        $parent->delete();
        return new StudentParentResource($parent);
    }
}
