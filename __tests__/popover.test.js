import Popover from '../src/popover';

describe('Popover', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="btn">Button</button>';
  });

  test('toggles popover on button click', () => {
    const button = document.querySelector('#btn');
    button.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 80,
      width: 120,
      height: 44,
    }));

    const popover = new Popover(button, 'Title', 'Body text');

    popover.toggle();

    const popoverEl = document.querySelector('.popover');
    expect(popoverEl).not.toBeNull();
    expect(popoverEl.querySelector('.popover-title').textContent).toBe('Title');
    expect(popoverEl.querySelector('.popover-body').textContent).toBe('Body text');

    popoverEl.getBoundingClientRect = jest.fn(() => ({
      width: 240,
      height: 100,
    }));

    popover.show();

    expect(popoverEl.style.top).toBe('-12px');
    expect(popoverEl.style.left).toBe('20px');

    popover.toggle();
    expect(document.querySelector('.popover')).toBeNull();
  });
});
