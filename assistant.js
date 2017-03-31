/**
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 3/31/2017
 * generate readme.md based snippet's definition
 */

let fs = require('fs');
const package = require('./package.json');
const rawSnippets = require('./snippets/apiDocSnippets.json');

let contentList = [];
let documentList = [];

let keyList = Object.keys(rawSnippets);
keyList.sort();
for (let index = 0; index < keyList.length; index++) {
    let name = keyList[index];
    let snippet = rawSnippets[name];
    let lowerName = name.toLowerCase().replace(/\s/g, '-');
    contentList.push('- [' + snippet.description + '](#' + lowerName + ')\n');
    documentList.push('### @' + name + '\n');
    documentList.push('#### `' + snippet.prefix + ' + tab` \n');
    documentList.push('```\n' + snippet.body.join('\n') + '\n``` \n\n');

}
let docContent = '# ' + package.displayName + '  \n' + package.name + '  \n\n  ' + package.description + ' \n';
docContent += "# Example: ";
docContent += '![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/basic.gif) \n';
docContent += '![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/custom.gif) \n';

docContent += '### Content:  \n\n';
docContent += contentList.join('') + '\n\n';
docContent += '### Example:  \n\n';
docContent += documentList.join('');

fs.writeFile('README.md', docContent, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Writed');
});
