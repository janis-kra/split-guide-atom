# split-guide-atom package

An Atom plugin that simplifies creating workshops using @kentcdodds awesome [split-guide](https://github.com/kentcdodds/split-guide) 

![Demo GIF](https://s27.postimg.org/na88jzikj/split_guide_atom_demo.gif)

## Why?

When creating a workshop using the aforementioned [split-guide](https://github.com/kentcdodds/split-guide) tool, I often had typos in the `// WORKSHOP` and/or `// FINAL` comments that you have to do when creating your workshop templates.
Also, I type `// WORKSPACE` instead of `// WORKSHOP` all the time...

This small Atom plugin fixes that problem by typing the comments for you when you click the corresponding menu item.

## Installation

Install it inside Atom via Settings -> Install -> Search for 'split-guide-atom' and click 'Install'. Or just `apm install split-guide-atom`

## Usage

First, select the portion of your source code that should be wrapped in `WORKSHOP`, `FINAL` or `COMMENT` comments. Or just place the cursor at any position inside the editor.

You then have three ways of issuing the commands (example for `WORKSHOP` comments):
* Via menu: Packages -> Split Guide -> Wrap in WORKSHOP comments
* Via shortcut: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and then type `WORKSHOP` (the command should then read 'Split Guide Atom: Workshop') -> <kbd>Enter</kbd>
* Via context menu: Right click in the editor -> Click 'Wrap in WORKSHOP comments'
