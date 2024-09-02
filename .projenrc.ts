import { cdktf } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const majorVersion = 0;
const nodeVersion = '18';

const project = new cdktf.ConstructLibraryCdktf({
  author: 'Ryan Martin',
  authorAddress: 'rlmartin@gmail.com',
  cdktfVersion: '^0.17.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@rlmartin-projen/cdktf-construct-script-runner',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:rlmartin-projen/cdktf-construct-script-runner.git',
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  minNodeVersion: `${nodeVersion}.0.0`,
  workflowNodeVersion: nodeVersion,
  majorVersion,
  releaseBranches: {
    dev: { prerelease: 'dev', npmDistTag: 'dev', majorVersion },
  },
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'],
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();