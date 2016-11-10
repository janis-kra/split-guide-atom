'use babel';

import SplitGuideAtomView from './split-guide-atom-view';
import { CompositeDisposable } from 'atom';

export default {

  splitGuideAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.splitGuideAtomView = new SplitGuideAtomView(state.splitGuideAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.splitGuideAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'split-guide-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.splitGuideAtomView.destroy();
  },

  serialize() {
    return {
      splitGuideAtomViewState: this.splitGuideAtomView.serialize()
    };
  },

  toggle() {
    console.log('SplitGuideAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
