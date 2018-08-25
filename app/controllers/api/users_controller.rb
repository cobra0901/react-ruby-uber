class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    data = params[:data]
    goals = {
      yearly_cycling_goal: data[:yearlyCyclingGoal],
      weekly_cycling_goal: data[:weeklyCyclingGoal],
      yearly_running_goal: data[:yearlyRunningGoal],
      weekly_running_goal: data[:weeklyRunningGoal]
    }

    if @user.update(goals)
      render 'api/users/show'
    else
      render json: @user.errors, status: 422
    end

  end

  def index
    if params[:query].present?
      @users = User.where('username ILIKE ?', "#{params[:query]}%")
      .where('username != ?', current_user.username)
      render '/api/users/index'
    else
      @users = User.all
    end
  end

  def user_params
    params.require(:user)
    .permit(:username, :email, :password, :avatar)
  end
end
