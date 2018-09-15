import { TestmanagerModule } from './testmanager.module';

describe('TestmanagerModule', () => {
  let testmanagerModule: TestmanagerModule;

  beforeEach(() => {
    testmanagerModule = new TestmanagerModule();
  });

  it('should create an instance', () => {
    expect(testmanagerModule).toBeTruthy();
  });
});
