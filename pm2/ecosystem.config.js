module.exports = {
  apps: [
    {
      name: 'vs-node-blog',
      script: './dist/main.js',
      args: 'one two',
      instances: 1,
      watch: ['./dist'],
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      env: {
        PORT: 3535
        // NODE_ENV: 'development'
      }
      // env_production: {
      //   PORT: 80,
      //   NODE_ENV: 'production'
      // }
    }
  ]

  // deploy: {
  //   production: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/production',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
