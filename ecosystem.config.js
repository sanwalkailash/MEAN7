module.exports = {
  apps : [{
    name: 'Remitance',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: "2", // number of cluster use max to use all cores.
    autorestart: true,
    watch: true, // The watch and restart mode watches the current directory to detect file changes and auto-start.
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'imhere',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: "2", // number of cluster use max to use all cores.
    autorestart: true,
    watch: true, // The watch and restart mode watches the current directory to detect file changes and auto-start.
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'storybooks',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: "2", // number of cluster use max to use all cores.
    autorestart: true,
    watch: true, // The watch and restart mode watches the current directory to detect file changes and auto-start.
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'https://github.com/sanwalkailash/MEAN7.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
