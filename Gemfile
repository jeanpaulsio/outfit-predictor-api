source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'decisiontree',      '~> 0.5.0'
gem 'devise'
gem 'devise_token_auth', '~> 0.1.42'
gem 'jbuilder',          '~> 2.5'
gem 'omniauth-github',   '~> 1.3'
gem 'pg',                '>= 0.18', '< 2.0'
gem 'puma',              '~> 3.7'
gem 'rack-cors',         '~> 1.0', '>= 1.0.2'
gem 'rails',             '~> 5.1.5'
gem 'sass-rails',        '~> 5.0'
gem 'turbolinks',        '~> 5'
gem 'uglifier',          '>= 1.3.0'

# gem 'redis', '~> 4.0'
# gem 'bcrypt', '~> 3.1.7'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'foreman', '~> 0.84.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
