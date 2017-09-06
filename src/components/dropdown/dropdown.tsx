import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'dropdown.scss'
})
export class Dropdown {
  @Prop() title: string = '';
  @Prop() @State() toggle: boolean = false;
  @Event() onToggle: EventEmitter;

  render() {
    return (
      <div>
        <button onClick={() => this.toggleClick()}>
          {this.title} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>

        <div style={{ display: this.toggle ? 'block' : 'none' }}>
          <slot></slot>
        </div>
      </div>
    )
  }

  toggleClick() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }
}