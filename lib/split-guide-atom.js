'use babel';

import {
  CompositeDisposable
} from 'atom';
import SplitGuideAtomView from './split-guide-atom-view';

export default {

  splitGuideAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate: function activate (state) {
    this.splitGuideAtomView = new SplitGuideAtomView(state.splitGuideAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.splitGuideAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'split-guide-atom:comment': () => this.wrap('COMMENT'),
      'split-guide-atom:final': () => this.wrap('FINAL'),
      'split-guide-atom:workshop': () => this.wrap('WORKSHOP')
    }));
  },

  deactivate: function deactivate () {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.splitGuideAtomView.destroy();
  },

  serialize: function serialize () {
    return {
      splitGuideAtomViewState: this.splitGuideAtomView.serialize()
    };
  },

  wrap: function wrap (tag) {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();
      const wrapped = `// ${tag}_START\n${selection}\n// ${tag}_END`;
      editor.insertText(wrapped);
    }
  }
};
