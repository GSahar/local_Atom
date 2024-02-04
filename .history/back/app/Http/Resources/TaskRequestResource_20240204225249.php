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
            'id' => $this->resource->id,
            'task' => Task::find($this->resource->task),
            'user' => User::find($this->resource->user_id),
            'status' => Status::find($this->resource->status_id),
            'comment' => $this->resource->comment_id
        ];

    }
}
