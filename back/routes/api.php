<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskRequestsController;
use App\Http\Controllers\AuditsController;
use App\Http\Controllers\DepartmentsController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\UsersController;


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

Route::get('/login', [UsersController::class, 'login']);
Route::get('/register', [UsersController::class, 'register']);
Route::get('/users', [UsersController::class, 'index']);
Route::get('/users/{id}',[UsersController::class, 'getUser']);

Route::get('/roles', [RolesController::class, 'index']);

Route::get('/permissions', [PermissionsController::class, 'index']);

Route::get('/requests', [TaskRequestsController::class, 'index']);

Route::get('/tasks', [TasksController::class, 'index']);

Route::get('/audit', [AuditsController::class, 'index']);

Route::get('/reports', [ReportsController::class, 'index']);

Route::get('/departments', [DepartmentsController::class, 'index']);
