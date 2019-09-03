module.exports = {
  apps: [
    {
      name: 'vs-node-blog',
      script: './dist/main.js',
      instances: 1,
      watch: ['./dist'],
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      env: {
        PORT: 3535,
        NODE_ENV: 'development'
      }
    }
  ]
};
