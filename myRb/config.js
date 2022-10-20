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
  requireConfig=false,
  printConfig: true,  
};
