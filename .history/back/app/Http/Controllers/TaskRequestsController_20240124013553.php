<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccessRequestRequest;
use App\Models\AccessRequest;

class TaskRequestsController extends Controller
{
    public function index()
    {
        $accessRequests = AccessRequest::all();
        return response()->json($accessRequests);
    }

    public function store(AccessRequestRequest $request)
    {
        $accessRequest = AccessRequest::create($request->validated());
        return response()->json($accessRequest, 201);
    }

    public function update(AccessRequestRequest $request, AccessRequest $accessRequest)
    {
        $accessRequest->update($request->validated());
        return response()->json($accessRequest);
    }

    public function destroy(AccessRequest $accessRequest)
    {
        $accessRequest->delete();
        return response()->json(null, 204);
    }
}
