;(function () {
  'use strict'

  function jsl (hljs) {
    var LITERALS = 'true false implies or xor and div mod not'

    var BUILT_INS = 'opposite opposite-add read-only max-length mime-types max-file-size ' +
      'regex precision required scale min-size max-size'

    var TYPES = 'binary string numeric timestamp date time boolean'

    var KWS =
      'constraint field identifier derived relation static new ' +
      'self abstract extends model entity query type error enum'

    var KEYWORDS = {
      //$pattern: /[a-zA-Z-]+/,
      keyword: KWS,
      type: TYPES,
      literal: LITERALS,
      built_in: BUILT_INS,
    }

    return {
      aliases: ['jsl', 'JSL'],
      keywords: KEYWORDS,
      contains: [
        hljs.QUOTE_STRING_MODE,
        hljs.NUMBER_MODE,
        hljs.BACKSLASH_ESCAPE,
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
      ],
    }
  }

  var hljs = require('highlight.js/lib/highlight')
  hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
  hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'))
  hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'))
  hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
  hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
  hljs.registerLanguage('properties', require('highlight.js/lib/languages/properties'))
  hljs.registerLanguage('puppet', require('highlight.js/lib/languages/puppet'))
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
  hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
  hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
  hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
  hljs.registerLanguage('jsl', jsl)
  ;[].slice.call(document.querySelectorAll('pre code.hljs')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
