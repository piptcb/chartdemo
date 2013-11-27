Chartdemo::Application.routes.draw do

  #get "categories/morris"  => ""  :as "morris"

  resources :categories
  root "categories#index"



end
