class Api::ActivitiesController < ApplicationController

  def create
    @activity = Activity.new(activity_params)

    if @activity.save
      render '/api/activities/show'
    else
      render json: @activities.errors.full_messages, status: 422
    end
  end

  def index

    if params[:page]
      page = Activity.all.page(1).per(1).total_pages - params[:page].to_i
      @activities = Activity.all.page(params[:page]).per(1)
    else
      @activities = Activity.all
    end

  end

  def show
    @activity = Activity.find(params[:id])
    @created = @activity.created_at.to_date.to_formatted_s(:long_ordinal)
  end

  def destroy
  end

  private

  def activity_params
    params.require(:activity)
    .permit(:title, :description, :polyline, :athlete_id, :est_moving_time,
    :distance, :elevation, :type_of)
  end

end
