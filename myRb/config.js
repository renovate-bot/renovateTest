let githubToken = process.env.SECRET_TOKEN
module.exports = {
  platform: 'github',
  logLevel: 'debug',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['raduspa/renovateTest'],
  renovateFork: true,
  gitAuthor: "Julien <julien@caffeine.lu>",
  username: "julienp",
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
