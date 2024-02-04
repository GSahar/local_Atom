<?php

namespace App\Http\Resources;

use App\Models\Task;
use App\Models\User;
use App\Models\Status;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'task' => Task::find($this->task_id),
            'user' => User::find($this->user_id),
            'status' => Status::find($this->status_id),
            'comment' => $this->comment_id
        ];

    }
}
