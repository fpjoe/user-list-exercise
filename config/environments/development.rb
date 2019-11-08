Rails.application.configure do

  ######################################################################
  # Settings specified here will take precedence over those in config/application.rb
  ######################################################################

  # Verifies that versions and hashed value of the package contents in the project's package.json
  config.webpacker.check_yarn_integrity = true

  # In the development environment your application's code is reloaded on
  # every request - this slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes
  config.cache_classes = false

  # Do not eager load code on boot
  config.eager_load = false

  # Show full error reports
  config.consider_all_requests_local = true

  # See debug level and up in the log (default is :info)
  config.log_level = :debug

  # Highlight code that triggered database queries in logs
  config.active_record.verbose_query_logs = true

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Log error messages when you accidentally call methods on nil
  config.whiny_nils = true

  # Raise an error on page load if there are pending migrations
  config.active_record.migration_error = :page_load

  # Raise error for missing translations
  # config.action_view.raise_on_missing_translations = true

  # Do not compress assets
  config.assets.js_compressor = false

  # Debug mode disables concatenation and preprocessing of assets -
  # this option may cause significant delays in view rendering with a large
  # number of complex assets
  config.assets.debug = true

  # Suppress logger output for asset requests
  config.assets.quiet = true

  # Configure LiveReload
  config.middleware.insert_before(ActionDispatch::DebugExceptions, ::Rack::LiveReload)

end
