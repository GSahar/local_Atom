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

Route::get('/login', [UsersController::class, 'login']);
Route::get('/register', [UsersController::class, 'register']);
Route::get('/users', [UsersController::class, 'index']);
Route::get('/users/{id}',[UsersController::class, 'getUser']);

Route::get('/roles', [UserController::class, 'index']);

Route::get('/permissions', [PermissionsController::class, 'index']);

Route::get('/requests', [PermissionsController::class, 'index']);

Route::get('/tasks', [PermissionsController::class, 'index']);

Route::get('/audit', [PermissionsController::class, 'index']);

Route::get('/reports', [PermissionsController::class, 'index']);

Route::get('/departments', [PermissionsController::class, 'index']);

