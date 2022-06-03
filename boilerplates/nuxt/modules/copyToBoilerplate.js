const fse = require('fs-extra');
const chokidar = require('chokidar');

export default function(moduleOptions) {
  const baseDir = '../../shared/src';
  const targetDir = this.options.srcDir;

  const copyFiles = async() => {
    try {
      await fse.copy(baseDir, targetDir);
      console.log('Copy completed!');
    } catch (err) {
      console.log('An error occured while copying the ui folder.');
      console.error(err);
    }
  };

  copyFiles();

  chokidar.watch([baseDir], { ignoreInitial: true }).on('all', (event) => {
    if (event === 'add' || event === 'change' || event === 'unlink') {
      copyFiles();
    }
  });
}
