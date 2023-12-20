import { cdapPlugin } from './plugin';

describe('cdap', () => {
  it('should export plugin', () => {
    expect(cdapPlugin).toBeDefined();
  });
});
