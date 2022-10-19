module.exports = {    
  platform: 'github',
  logLevel: 'debug',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['raduspa/renovateTest'],
  renovateFork: true,
  gitAuthor: "rBonWork <rbb@worker.wo>",
  username: "julienp",
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
