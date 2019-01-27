recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let totalFiles = [];

    logFiles = (currentLevel) => {
      if("files" in currentLevel) {
        currentLevel.files.forEach((item) => {
          if(totalFiles.indexOf(item) === -1) {
            totalFiles.push(item);
          }
        })
      }
    }

    goDeeper = (currentLevel) => {
      if("subDirs" in currentLevel && currentLevel.subDirs.length > 0) {
        for(let i = 0; i < currentLevel.subDirs.length; i++) {
          logFiles(currentLevel);
          goDeeper(currentLevel.subDirs[i]);
        }
      } else {
        logFiles(currentLevel);
      }
    }

    goDeeper(data);

    if(arguments[1]) {
      const myRegEx = new RegExp("." + dirName)

      return totalFiles.filter((item) => item.match(myRegEx))
    }

    return totalFiles;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if(n <= 1) {
      return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
  },
};
