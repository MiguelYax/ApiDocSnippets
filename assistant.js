/**
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 3/31/2017
 * generate readme.md based snippet's definition
 */

const { writeFile } = require('fs');
const { displayName, description } = require('./package.json');
const rawSnippets = require('./snippets/apiDocSnippets.json');

const contentList = ['## Content:'];
const exampleList = ['## Example:'];

Object
  .keys(rawSnippets)
  .sort()
  .forEach(name => {
    const { description, prefix, body } = rawSnippets[name];
    const lowerName = name.toLowerCase().replace(/\s/g, '-');
    contentList.push(`- [${description}](#${lowerName})`);
    exampleList.push(
      `### @${name}`,
      `#### \`${prefix} + tab\``,
      '```',
      ...body,
      '```');
  });

const contributionList = [
  '# Contribution',
  '* Something is missing?',
  '* If you have ideas on how to improve this project let us know.',
  '* All contributions are welcome!'
];

const docContent = [
  `# ${displayName}`,
  `# ${description}`,
  '### Basic documetation example:',
  '![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/basic.gif) ',
  '### Custom documentation example:',
  '![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/custom.gif) ',
  ...contentList,
  ...exampleList,
  ...contributionList
];

writeFile('README.md', docContent.join('\n'), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Writed');
});
