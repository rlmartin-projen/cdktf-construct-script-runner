import { Construct } from 'constructs';
import { Ecr } from '@rlmartin-projen/terraform-aws-modules-ecr';

export interface ScriptRunnerConfig {
  readonly name: string;
}

export class ScriptRunner extends Construct {
  constructor(scope: Construct, id: string, config: ScriptRunnerConfig) {
    super(scope, id);
    const { name } = config;

    new Ecr(this, 'repository', {
      repositoryName: name,
    });
  }
}
