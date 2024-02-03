<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequestRequest;
use App\Models\TaskRequest;

class TaskRequestsController extends Controller
{
    public function index()
    {
        $accessRequests = TaskRequest::all();
        return response()->json($accessRequests);
    }

    public function store(TaskRequestRequest $request)
    {
        $accessRequest = TaskRequest::create($request->validated());
        return response()->json($accessRequest, 201);
    }

    public function update(TaskRequestRequest $request, TaskRequest $accessRequest)
    {
        $accessRequest->update($request->validated());
        return response()->json($accessRequest);
    }

    public function destroy(TaskRequest $accessRequest)
    {
        $accessRequest->delete();
        return response()->json(null, 204);
    }
}