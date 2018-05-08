# oni-plugin-starter-kit
:hammer: Template for creating Oni plugins

> NOTE: This is currently a WIP.

## Getting started

- Clone the repo: `git clone https://github.com/onivim/oni-plugin-starter-kit.git`
- Install dependencies: `yarn install`
- Open Oni
- Open this folder as a `workspace` (`Control+Shift+P`/`Meta+Shift+P` -> `Open Workspace`)
    - If everything is set, you'll see a note - "Developing Plugin" in the status bar.
- Press `F5` to test & debug the plugin in a new instance of Oni!

## Features

__IN PROGRESS__:
- [ ] Automatic compilation of code
- [ ] Automatic reload of editor when a change is detected
- [ ] Automation to verify plugin
- [ ] `F5` command to run the plugin

__DONE:__

## Development

- [API Documentation](https://onivim.github.io/oni-api/)
- [API Examples](https://github.com/onivim/oni/wiki/API-Examples)

## Publish

Oni plugins are just `npm` modules, and therefore, you can publish using `npm`.

Recommended naming conventions:
- `oni-plugin-<name>` - general plugins
- `oni-language-<name>` - language plugins
- `oni-editor-<name>` - new editor implementations


