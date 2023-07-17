import { App, TerraformStack } from 'cdktf';
import { ScriptRunner } from '../src';

describe('ScriptRunner', () => {
  test('loads successfully', () => {
    const app = new App();
    const stack = new TerraformStack(app, 'my-stack');
    new ScriptRunner(stack, 'script-runner', {
      name: 'foo',
    });
    app.synth();
  });
});