import Markdown from '../../libs/markdown';

import './style.scss';

export default class Dialog extends Markdown {
  document(locale) {
    return require(`./dialog.md`);
  }
}
