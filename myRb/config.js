let githubToken = process.env.SECRET_TOKEN
module.exports = {
  platform: 'github',
  logLevel: 'debug',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['raduspa/renovateTest'],
  enabledManagers: [ "gradle", "npm" ],
  renovateFork: true,
  gitAuthor: "Julien <julien@caffeine.lu>",
  username: "julienp",
  onboarding: false,
  requireConfig: false,
  printConfig: true,
  
    "lockFileMaintenance": {
    "enabled": true
  },
  "baseBranches": [
    "main"
  ],
  "ignorePaths": [
    "/node_modules/",
    "/test/",
    "/tests/"
  ],
  "packageRules": [
    {
      "description": "explicitly enable npm groupname packages public version upgrades",
      "matchManagers": [
        "npm"
      ],
      "matchCurrentVersion": "!/.*-.*/",
      "enabled": true
    },
    {
      "description": "explicitly enable maven groupname packages",
      "matchManagers": [
        "gradle"
      ],      
      "enabled": true
    },
    {
      "description": "Disable for global.json",
      "matchFiles": [
        "global.json"
      ],
      "enabled": false
    }
  ]
};
