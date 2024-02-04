<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('users', UsersController::class);
Route::apiResource('roles', RolesController::class);
Route::apiResource('permissions', PermissionsController::class);
Route::apiResource('requests', RequestsController::class);
Route::apiResource('tasks', TasksController::class);
Route::apiResource('audit', AuditController::class);
Route::apiResource('reports', ReportsController::class);
Route::apiResource('departments', DepartmentsController::class);
