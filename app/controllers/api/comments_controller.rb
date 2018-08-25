class Api::CommentsController < ApplicationController

  def create

    @comment = current_user.comments.new(comment_params)
    if @comment.save
      @activity = Activity.find(comment_params[:activity_id])
      render '/api/activities/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def comment_params
    params.require(:comment).permit(:content, :activity_id, :author_id)
  end
end
