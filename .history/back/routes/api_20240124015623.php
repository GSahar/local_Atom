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

Route::get('/login', [UserController::class, 'login']);
Route::get('/register', [UserController::class, 'register']);
Route::get('/users', [UserController::class, 'getUsers']);
Route::get('/users/{id}',[UserController::class, 'getUser']);

Route::get('/users', [UserController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);

Route::apiResource('users', UsersController::class);
Route::apiResource('roles', RolesController::class);
Route::apiResource('permissions', PermissionsController::class);
Route::apiResource('requests', RequestsController::class);
Route::apiResource('tasks', TasksController::class);
Route::apiResource('audit', AuditController::class);
Route::apiResource('reports', ReportsController::class);
Route::apiResource('departments', DepartmentsController::class);
