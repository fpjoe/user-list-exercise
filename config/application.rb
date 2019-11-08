require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production -
# if you precompile assets before deploying to production, use this line
Bundler.require(*Rails.groups(assets: %w(development test)))

module UserListExercise
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    ######################################################################
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    ######################################################################

    config.autoload_paths += Dir[ Rails.root.join('lib') ]
    config.eager_load_paths += Dir[ Rails.root.join('lib') ]

    # Make rspec the default
    config.generators do |g|
      g.test_framework :rspec
    end

    # Enable the asset pipeline
    config.assets.enabled = true

    # Version of your assets, change this if you want to expire all your assets
    config.assets.version = '1.0'

    # Required by Heroku
    config.assets.initialize_on_precompile = false

    # Precompile all css and js (where the file does not start with a leading underscore)
    config.assets.precompile << Proc.new do |path, filename|
      file = path.split('/').last

      if file[0] != '_' && path =~ /\.(js|css)\z/
        app_assets_path = Rails.root.join('app', 'assets').to_path
        if filename.starts_with? app_assets_path
          puts 'including asset: ' + filename
          true
        else
          puts 'excluding asset: ' + filename
          false
        end
      else
        false
      end
    end

    config.force_ssl = false

  end
end
