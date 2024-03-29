;(function () {
  'use strict'

  function jsl (hljs) {
    var LITERALS = [
      'true',
      'false',
      'implies',
      'or',
      'xor',
      'and',
      'div',
      'mod',
      'not',
    ]

    var BUILT_INS = [
      'opposite',
      'opposite-add',
      'read-only',
      'max-length',
      'mime-types',
      'max-file-size',
      'regex',
      'precision',
      'required',
      'scale',
      'min-size',
      'max-size',
      'maps',
      'reads',
      'choices',
    ]

    var TYPES = [
      'binary',
      'string',
      'numeric',
      'timestamp',
      'date',
      'time',
      'boolean',
    ]

    var KWS = [
      'constraint',
      'field',
      'identifier',
      'derived',
      'relation',
      'static',
      'new ',
      'self',
      'abstract',
      'extends',
      'model',
      'entity',
      'query',
      'type',
      'error',
      'enum',
      'transfer',
      'constructor',
      'actor',
      'service',
      'function',
      'exports',
      'guard',
      'realm',
      'claim',
      'identity',
    ]

    var KEYWORDS = {
      $pattern: /[a-zA-Z-]+/,
      keyword: KWS,
      type: TYPES,
      literal: LITERALS,
      built_in: BUILT_INS,
    }

    const ANNOTATION = {
      className: 'meta',
      begin: '@[a-zA-Z][a-zA-Z0-9]*',
      contains: [
        {
          begin: /\(/,
          end: /\)/,
        },
      ],
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
        ANNOTATION,
        {
          className: 'semicolon',
          begin: ';',
        },
      ],
    }
  }

  var hljs = require('highlight.js/lib/common')
  hljs.registerLanguage('jsl', jsl)
  ;[].slice.call(document.querySelectorAll('pre code.hljs')).forEach(function (node) {
    hljs.highlightElement(node)
  })
})()
