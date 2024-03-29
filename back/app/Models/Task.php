<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'task_user', 'task_id', 'user_id');
    }

    public function taskRequests()
    {
        return $this->hasMany(TaskRequest::class);
    }
}
