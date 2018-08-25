class Api::LikesController < ApplicationController

  def create

    @like = current_user.liked_posts.new(
      {activity_id: params[:activityId]})

    if @like.save
      @activity = Activity.find(params[:activityId])
      render '/api/activities/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

end
