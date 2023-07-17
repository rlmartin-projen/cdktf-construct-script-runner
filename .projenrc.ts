import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Ryan Martin',
  authorAddress: 'rlmartin@gmail.com',
  cdktfVersion: '^0.13.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdktf-construct-script-runner',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:rlmartin-projen/cdktf-construct-script-runner.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();