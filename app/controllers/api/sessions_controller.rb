class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_creds(
      params[:user][:email],
      params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json:
      ['The username or password did not match. Please try again.'], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render status: 404
    end
  end
end
