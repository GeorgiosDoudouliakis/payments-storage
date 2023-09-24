import { FirstTwoLettersPipe } from './first-two-letters.pipe';

describe('FirstTwoLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstTwoLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
