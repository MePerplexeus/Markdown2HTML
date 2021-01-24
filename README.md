# Markdown2HTML
A quick and simple solution to convert any embedded markdown text to html.

### How do I use this?
#### Import the code
```html
// Paste this line into your header tag after downloading the code
<script src="markdownToHTML.js"></script>

// or This to run it directly from github w/o downloading it
<script src="https://meperplexeus.github.io/Markdown2HTML/markdownToHTML.js"></script>
```

#### Call the function
Lets say you have this markdown text in a certain div with the id markdown
```html
<div id="markdown"># This is title
---
**Hope** you have a **lot of *fun!***
- hello
- this
- is
- a
- list</div>
```
Just go to the script tag call the function and use it to replace the same with the HTML thats given as the output of the function.
```html
<script type="text/javascript">
  ...
  // if you are using JQuery, you can use this to replace the markdown div's content with HTML
  $('#markdown').html(HTMLtoMD($('#markdown').html()))
  
  // if you are using only javascript to do the same, then use this
  document.getElementById('markdown').innerHTML  = HTMLtoMD(document.getElementById('markdown').innerHTML);
  ...
</script>
```
## That's all there is to it!

> **NOTE:**
> As of now, this only supports headings(h1 to h7), paragraph, horizontal rule, unordered list (supports only one list at the time tho), bold and italics tags, as that's all i required at the moment.
---

***Note:** I will not be updating this regularly. So feel free to fork and stuff this anytime. :)*
***P.S.:** I will be using the following cheatsheet/guide update this repo. (NOT REGULARLY THO)*
[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
[php Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)
