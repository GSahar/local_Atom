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
        //dd($this);

        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'task' => $this->task->description,
            'user' => $this->user->fio,
            'status' => $this->status->name,
            'comment' => $this->comment
        ];

    }
}
