import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {
  render() {
    return (
      <div>
        <h1>My Web Component App</h1>

        <my-dropdown title="Toggle">
          Hello World
        </my-dropdown>
      </div>
    );
  }

  @Listen('onToggle')
  log(event) {
    console.log(event);
  }
}
