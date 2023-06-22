## linking js with Html file
- you need to declare any element you want in html inside js for example 
    ‘let nodeList = document.querySelectorAll(selector);‘
    Must use CSS selector format that means with # or . format
- you can use querySelector even for elements with specfic attributes for example
    <code>&lt;let autoplays = document.querySelectorAll('[autoplay]');&gt;</code>
    so any element with autoplay attr will be selected
- you can use querySelector for group of multiple selectors using the , between them
  <code>&lt;let elements = document.querySelectorAll('div, p');&gt;</code>
    
- To find descendants of a node, you use the space
  <code>&lt;let links = document.querySelector('p a');&gt;</code>

