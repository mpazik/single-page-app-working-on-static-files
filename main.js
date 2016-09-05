require(['front-matter', 'node_modules/marked/lib/marked'], (frontMatter, marked) => {
    console.log('dupa');
    const data = `
---
name: Marek
contact:
 email: email@domain.com
 address: some location
pets:
 - cat
 - dog
 - bat
 ---
 ### Content
 **hello**
`;
    const page = frontMatter(data);
    const body = marked.parse(page.body);
    console.log(body);
    console.log(page);
});