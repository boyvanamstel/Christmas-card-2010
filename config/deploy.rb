set :application, "Kerstkaart2010"
set :repository,  "git@git.boyvanamstel.nl:rails-kerstkaart2010.git"

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :user, 'boy'
set :use_sudo, false
set :deploy_to, "/home/boy/public_html/kerstkaart2010.boyvanamstel.nl"
set :deploy_via, :remote_cache

role :web, "kerstkaart2010.boyvanamstel.nl"                          # Your HTTP server, Apache/etc
role :app, "kerstkaart2010.boyvanamstel.nl"                          # This may be the same as your `Web` server
role :db,  "kerstkaart2010.boyvanamstel.nl", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

# If you are using Passenger mod_rails uncomment this:
# if you're still using the script/reapear helper you will need
# these http://github.com/rails/irs_process_scripts

after "deploy", "deploy:bundle_gems"
after "deploy", "deploy:bundle_gems", "deploy:restart"

namespace :deploy do
  task :bundle_gems do
    run "cd #{deploy_to}/current && /opt/ruby-enterprise-1.8.7-2010.02/bin/bundle install --path vendor/gems"
  end
  task :rake do
     run "cd #{deploy_to}/current && /opt/ruby-enterprise-1.8.7-2010.02/bin/rake db:migrate RAILS_ENV=production"
  end  
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end
