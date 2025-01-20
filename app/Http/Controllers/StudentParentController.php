<?php

namespace App\Http\Controllers;

use App\Models\StudentParent;
use App\Http\Requests\StoreStudentParentRequest;
use App\Http\Requests\UpdateStudentParentRequest;
use App\Http\Resources\StudentParentResource;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


class StudentParentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): AnonymousResourceCollection

    {

        $columns = $request->get('columns');
        $parents = !empty($columns) ? StudentParent::all($columns) : StudentParent::all();
        return StudentParentResource::collection($parents);
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
        $forms = $request->validated();
        $forms['password'] = bcrypt($forms['password']);
        $parent->update($forms);
        return response()->json([
            'parent' => $parent,
            'message' => __('Parent updated successfully')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentParent $parent)
    {

        $parent->forceDelete();
        return new StudentParentResource($parent);
    }
}
