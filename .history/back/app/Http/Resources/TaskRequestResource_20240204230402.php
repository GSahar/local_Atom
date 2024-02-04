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
            //'id' => $this->resource->id,
            'task' => Task::find($this->request->task_id),
            'user' => User::find($this->request->user_id),
            'status' => Status::find($this->request->status_id),
            'comment' => $this->request->comment_id
        ];

    }
}
