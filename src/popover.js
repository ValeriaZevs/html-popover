export default class Popover {
  constructor(triggerEl, title, body) {
    this.triggerEl = triggerEl;
    this.title = title;
    this.body = body;
    this.popoverEl = null;
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.className = 'popover';

    const titleEl = document.createElement('h3');
    titleEl.className = 'popover-title';
    titleEl.textContent = this.title;

    const bodyEl = document.createElement('p');
    bodyEl.className = 'popover-body';
    bodyEl.textContent = this.body;

    popover.append(titleEl, bodyEl);
    document.body.append(popover);
    this.popoverEl = popover;
  }

  show() {
    if (!this.popoverEl) {
      this.createPopover();
    }

    const triggerRect = this.triggerEl.getBoundingClientRect();
    const popoverRect = this.popoverEl.getBoundingClientRect();

    const top = window.scrollY + triggerRect.top - popoverRect.height - 12;
    const left = window.scrollX + triggerRect.left + (triggerRect.width - popoverRect.width) / 2;

    this.popoverEl.style.top = `${top}px`;
    this.popoverEl.style.left = `${left}px`;
  }

  hide() {
    if (this.popoverEl) {
      this.popoverEl.remove();
      this.popoverEl = null;
    }
  }

  toggle() {
    if (this.popoverEl) {
      this.hide();
      return;
    }

    this.show();
  }
}
