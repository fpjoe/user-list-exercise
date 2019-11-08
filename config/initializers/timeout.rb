# service_timeout is in seconds - Heroku recommends that this should be 
# shorter than Unicorn timeout - when the service_timeout limit is hit, it
# closes the requests and generates a stacktrace in the logs - see:
#
#   https://devcenter.heroku.com/articles/rails-unicorn#rack-timeout
#
# So we set the service_timeout to be 5 seconds less than that set in the
# web server (we use Unicorn)

if Rails.env.development?
  if ENV['WEBSERVER_TIMEOUT_OVERRIDE']
    Rails.application.config.middleware.insert_before Rack::Runtime, Rack::Timeout, service_timeout: Integer(ENV['WEBSERVER_TIMEOUT_OVERRIDE']) - 5
  else
    Rails.application.config.middleware.insert_before Rack::Runtime, Rack::Timeout, service_timeout: 3595
  end
else
  Rails.application.config.middleware.insert_before Rack::Runtime, Rack::Timeout, service_timeout: 20
end

