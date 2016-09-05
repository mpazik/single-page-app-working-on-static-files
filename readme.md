# Single page app working on static files
It's an experiment when I try to create an singe page app that is working on static files.
 
Content is written in markdown files. Each file represent one page. Meta data are written using front-matter.

Layouts are made of JS files that have `render` function which accept `content` and `metadate`.
 
Experiment is not finished yet as I for now decided to use simple static website generator based on [gulp](http://gulpjs.com/).

## Potential advantages
- simplicity
    - no needed process for building page as rendering is on client site
    - rendering process is really easy to understand maintain and extend
- extendability
    - easy to change layout engine
    - easy to add internationalization
- efficiency
    - web page is downloaded only once and can be cached
    - browser has to download only the content when user browse pages (no need to parsing full html every new page)
    

## Disadvantages
- First load requires downloading all scripts and logic for parsing pages.