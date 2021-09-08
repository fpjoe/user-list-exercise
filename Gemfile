source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# For Rails
gem 'rails', '~> 5.2.0'

# For reducing boot times through caching, required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# For Puma as the app server
gem 'puma', '~> 3.11'

# For aborting HTTP requests that take too long
gem 'rack-timeout'

# For PostgreSQL
gem 'pg'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# For debugging, for printing Ruby objects in friendlier format
gem 'awesome_print'

# For bootstrap
gem 'bootstrap', '~> 4.1.1'

# For jQuery
gem 'jquery-rails', '~> 4.3'
gem 'jquery-ui-rails', '~> 6.0'

# For React
gem 'webpacker', '~> 3.5.5'

# For React, so that we have the react_component method in Rails views,
# which was included in the old react-rails and react_on_rails gems,
# but which isn't included in the new Rails 5.1+ built-in React which
# we use
gem 'webpacker-react'

# For using GraphQL
gem 'graphql'

# For Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# For parsing/generating JSON within Ruby
gem 'json'

# For pagination of results of any kind
gem 'will_paginate', '~> 3.0'

group :development, :test do

  # For running tests
  gem 'rspec-mocks', '~> 3.7'
  gem 'rspec-rails', '~> 3.7'

  # For IRB console on error pages
  gem 'web-console', '~> 3.6'

end

group :development do

  # For browser, required by Rails Panel Chrome extension
  gem 'meta_request'

  # For auto-reloading of browser window when view files change
  gem 'rack-livereload'

  # For enhanced display of server-side exceptions in browser
  gem 'better_errors', '~> 2.9'

end

gem 'graphiql-rails', group: :development
