/*
 * Copyright 2019, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
    (factory((global.ReactIntl = {}),global.PropTypes,global.React));
}(this, (function (exports,PropTypes,React) { 'use strict';

    if (typeof React === 'undefined') {
        throw new ReferenceError('React must be loaded before ReactIntl.');
    }


    PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
    var React__default = 'default' in React ? React['default'] : React;

    // GENERATED FILE
    var defaultLocaleData = {
      locale: "en",
      pluralRuleFunction: function pluralRuleFunction(n, ord) {
        var s = String(n).split("."),
            v0 = !s[1],
            t0 = Number(s[0]) == n,
            n10 = t0 && s[0].slice(-1),
            n100 = t0 && s[0].slice(-2);
        if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
        return n == 1 && v0 ? "one" : "other";
      },
      fields: {
        year: {
          displayName: "year",
          relative: {
            0: "this year",
            1: "next year",
            "'\"\\'\\\\\"-1\\\\\"\\'\"'": "last year"
          },
          relativeTime: {
            future: {
              one: "in {0} year",
              other: "in {0} years"
            },
            past: {
              one: "{0} year ago",
              other: "{0} years ago"
            }
          }
        },
        "'\"year-short\"'": {
          displayName: "yr.",
          relative: {
            0: "this yr.",
            1: "next yr.",
            "\"'\\\"\\\\'\\\\\\\\\\\"-1\\\\\\\\\\\"\\\\'\\\"'\"": "last yr."
          },
          relativeTime: {
            future: {
              one: "in {0} yr.",
              other: "in {0} yr."
            },
            past: {
              one: "{0} yr. ago",
              other: "{0} yr. ago"
            }
          }
        },
        month: {
          displayName: "month",
          relative: {
            0: "this month",
            1: "next month",
            "'\"\\'\\\\\"-1\\\\\"\\'\"'": "last month"
          },
          relativeTime: {
            future: {
              one: "in {0} month",
              other: "in {0} months"
            },
            past: {
              one: "{0} month ago",
              other: "{0} months ago"
            }
          }
        },
        "'\"month-short\"'": {
          displayName: "mo.",
          relative: {
            0: "this mo.",
            1: "next mo.",
            "\"'\\\"\\\\'\\\\\\\\\\\"-1\\\\\\\\\\\"\\\\'\\\"'\"": "last mo."
          },
          relativeTime: {
            future: {
              one: "in {0} mo.",
              other: "in {0} mo."
            },
            past: {
              one: "{0} mo. ago",
              other: "{0} mo. ago"
            }
          }
        },
        day: {
          displayName: "day",
          relative: {
            0: "today",
            1: "tomorrow",
            "'\"\\'\\\\\"-1\\\\\"\\'\"'": "yesterday"
          },
          relativeTime: {
            future: {
              one: "in {0} day",
              other: "in {0} days"
            },
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            }
          }
        },
        "'\"day-short\"'": {
          displayName: "day",
          relative: {
            0: "today",
            1: "tomorrow",
            "\"'\\\"\\\\'\\\\\\\\\\\"-1\\\\\\\\\\\"\\\\'\\\"'\"": "yesterday"
          },
          relativeTime: {
            future: {
              one: "in {0} day",
              other: "in {0} days"
            },
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            }
          }
        },
        hour: {
          displayName: "hour",
          relative: {
            0: "this hour"
          },
          relativeTime: {
            future: {
              one: "in {0} hour",
              other: "in {0} hours"
            },
            past: {
              one: "{0} hour ago",
              other: "{0} hours ago"
            }
          }
        },
        "'\"hour-short\"'": {
          displayName: "hr.",
          relative: {
            0: "this hour"
          },
          relativeTime: {
            future: {
              one: "in {0} hr.",
              other: "in {0} hr."
            },
            past: {
              one: "{0} hr. ago",
              other: "{0} hr. ago"
            }
          }
        },
        minute: {
          displayName: "minute",
          relative: {
            0: "this minute"
          },
          relativeTime: {
            future: {
              one: "in {0} minute",
              other: "in {0} minutes"
            },
            past: {
              one: "{0} minute ago",
              other: "{0} minutes ago"
            }
          }
        },
        "'\"minute-short\"'": {
          displayName: "min.",
          relative: {
            0: "this minute"
          },
          relativeTime: {
            future: {
              one: "in {0} min.",
              other: "in {0} min."
            },
            past: {
              one: "{0} min. ago",
              other: "{0} min. ago"
            }
          }
        },
        second: {
          displayName: "second",
          relative: {
            0: "now"
          },
          relativeTime: {
            future: {
              one: "in {0} second",
              other: "in {0} seconds"
            },
            past: {
              one: "{0} second ago",
              other: "{0} seconds ago"
            }
          }
        },
        "'\"second-short\"'": {
          displayName: "sec.",
          relative: {
            0: "now"
          },
          relativeTime: {
            future: {
              one: "in {0} sec.",
              other: "in {0} sec."
            },
            past: {
              one: "{0} sec. ago",
              other: "{0} sec. ago"
            }
          }
        }
      }
    };

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    /* jslint esnext: true */
    var hop = Object.prototype.hasOwnProperty;
    function extend(obj) {
      var sources = Array.prototype.slice.call(arguments, 1),
          i,
          len,
          source,
          key;

      for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];

        if (!source) {
          continue;
        }

        for (key in source) {
          if (hop.call(source, key)) {
            obj[key] = source[key];
          }
        }
      }

      return obj;
    }

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */
    // Copyright 2013 Andy Earnshaw, MIT License

    var realDefineProp = function () {
      try {
        return !!Object.defineProperty({}, 'a', {});
      } catch (e) {
        return false;
      }
    }();
    var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
      if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
      } else if (!hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
      }
    };

    var objCreate = Object.create || function (proto, props) {
      var obj, k;

      function F() {}

      F.prototype = proto;
      obj = new F();

      for (k in props) {
        if (hop.call(props, k)) {
          defineProperty(obj, k, props[k]);
        }
      }

      return obj;
    };

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    function Compiler(locales, formats, pluralFn) {
      this.locales = locales;
      this.formats = formats;
      this.pluralFn = pluralFn;
    }

    Compiler.prototype.compile = function (ast) {
      this.pluralStack = [];
      this.currentPlural = null;
      this.pluralNumberFormat = null;
      return this.compileMessage(ast);
    };

    Compiler.prototype.compileMessage = function (ast) {
      if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
      }

      var elements = ast.elements,
          pattern = [];
      var i, len, element;

      for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
          case 'messageTextElement':
            pattern.push(this.compileMessageText(element));
            break;

          case 'argumentElement':
            pattern.push(this.compileArgument(element));
            break;

          default:
            throw new Error('Message element does not have a valid type');
        }
      }

      return pattern;
    };

    Compiler.prototype.compileMessageText = function (element) {
      // When this `element` is part of plural sub-pattern and its value contains
      // an unescaped '#', use a `PluralOffsetString` helper to properly output
      // the number with the correct offset in the string.
      if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
          this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, element.value);
      } // Unescape the escaped '#'s in the message text.


      return element.value.replace(/\\#/g, '#');
    };

    Compiler.prototype.compileArgument = function (element) {
      var format = element.format;

      if (!format) {
        return new StringFormat(element.id);
      }

      var formats = this.formats,
          locales = this.locales,
          pluralFn = this.pluralFn,
          options;

      switch (format.type) {
        case 'numberFormat':
          options = formats.number[format.style];
          return {
            id: element.id,
            format: new Intl.NumberFormat(locales, options).format
          };

        case 'dateFormat':
          options = formats.date[format.style];
          return {
            id: element.id,
            format: new Intl.DateTimeFormat(locales, options).format
          };

        case 'timeFormat':
          options = formats.time[format.style];
          return {
            id: element.id,
            format: new Intl.DateTimeFormat(locales, options).format
          };

        case 'pluralFormat':
          options = this.compileOptions(element);
          return new PluralFormat(element.id, format.ordinal, format.offset, options, pluralFn);

        case 'selectFormat':
          options = this.compileOptions(element);
          return new SelectFormat(element.id, options);

        default:
          throw new Error('Message element does not have a valid format type');
      }
    };

    Compiler.prototype.compileOptions = function (element) {
      var format = element.format,
          options = format.options,
          optionsHash = {}; // Save the current plural element, if any, then set it to a new value when
      // compiling the options sub-patterns. This conforms the spec's algorithm
      // for handling `"#"` syntax in message text.

      this.pluralStack.push(this.currentPlural);
      this.currentPlural = format.type === 'pluralFormat' ? element : null;
      var i, len, option;

      for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i]; // Compile the sub-pattern and save it under the options's selector.

        optionsHash[option.selector] = this.compileMessage(option.value);
      } // Pop the plural stack to put back the original current plural value.


      this.currentPlural = this.pluralStack.pop();
      return optionsHash;
    }; // -- Compiler Helper Classes --------------------------------------------------


    function StringFormat(id) {
      this.id = id;
    }

    StringFormat.prototype.format = function (value) {
      if (!value && typeof value !== 'number') {
        return '';
      }

      return typeof value === 'string' ? value : String(value);
    };

    function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
      this.id = id;
      this.useOrdinal = useOrdinal;
      this.offset = offset;
      this.options = options;
      this.pluralFn = pluralFn;
    }

    PluralFormat.prototype.getOption = function (value) {
      var options = this.options;
      var option = options['=' + value] || options[this.pluralFn(value - this.offset, this.useOrdinal)];
      return option || options.other;
    };

    function PluralOffsetString(id, offset, numberFormat, string) {
      this.id = id;
      this.offset = offset;
      this.numberFormat = numberFormat;
      this.string = string;
    }

    PluralOffsetString.prototype.format = function (value) {
      var number = this.numberFormat.format(value - this.offset);
      return this.string.replace(/(^|[^\\])#/g, '$1' + number).replace(/\\#/g, '#');
    };

    function SelectFormat(id, options) {
      this.id = id;
      this.options = options;
    }

    SelectFormat.prototype.getOption = function (value) {
      var options = this.options;
      return options[value] || options.other;
    };

    var parser = (function () {
      /*
       * Generated by PEG.js 0.9.0.
       *
       * http://pegjs.org/
       */

      function peg$subclass(child, parent) {
        function ctor() {
          this.constructor = child;
        }

        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
      }

      function peg$SyntaxError(message, expected, found, location) {
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";

        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(this, peg$SyntaxError);
        }
      }

      peg$subclass(peg$SyntaxError, Error);

      function peg$parse(input) {
        var options = arguments.length > 1 ? arguments[1] : {},
            peg$FAILED = {},
            peg$startRuleFunctions = {
          start: peg$parsestart
        },
            peg$startRuleFunction = peg$parsestart,
            peg$c0 = function (elements) {
          return {
            type: 'messageFormatPattern',
            elements: elements,
            location: location()
          };
        },
            peg$c1 = function (text) {
          var string = '',
              i,
              j,
              outerLen,
              inner,
              innerLen;

          for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
            inner = text[i];

            for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
              string += inner[j];
            }
          }

          return string;
        },
            peg$c2 = function (messageText) {
          return {
            type: 'messageTextElement',
            value: messageText,
            location: location()
          };
        },
            peg$c3 = /^[^ \t\n\r,.+={}#]/,
            peg$c4 = {
          type: "class",
          value: "[^ \\t\\n\\r,.+={}#]",
          description: "[^ \\t\\n\\r,.+={}#]"
        },
            peg$c5 = "{",
            peg$c6 = {
          type: "literal",
          value: "{",
          description: "\"{\""
        },
            peg$c7 = ",",
            peg$c8 = {
          type: "literal",
          value: ",",
          description: "\",\""
        },
            peg$c9 = "}",
            peg$c10 = {
          type: "literal",
          value: "}",
          description: "\"}\""
        },
            peg$c11 = function (id, format) {
          return {
            type: 'argumentElement',
            id: id,
            format: format && format[2],
            location: location()
          };
        },
            peg$c12 = "number",
            peg$c13 = {
          type: "literal",
          value: "number",
          description: "\"number\""
        },
            peg$c14 = "date",
            peg$c15 = {
          type: "literal",
          value: "date",
          description: "\"date\""
        },
            peg$c16 = "time",
            peg$c17 = {
          type: "literal",
          value: "time",
          description: "\"time\""
        },
            peg$c18 = function (type, style) {
          return {
            type: type + 'Format',
            style: style && style[2],
            location: location()
          };
        },
            peg$c19 = "plural",
            peg$c20 = {
          type: "literal",
          value: "plural",
          description: "\"plural\""
        },
            peg$c21 = function (pluralStyle) {
          return {
            type: pluralStyle.type,
            ordinal: false,
            offset: pluralStyle.offset || 0,
            options: pluralStyle.options,
            location: location()
          };
        },
            peg$c22 = "selectordinal",
            peg$c23 = {
          type: "literal",
          value: "selectordinal",
          description: "\"selectordinal\""
        },
            peg$c24 = function (pluralStyle) {
          return {
            type: pluralStyle.type,
            ordinal: true,
            offset: pluralStyle.offset || 0,
            options: pluralStyle.options,
            location: location()
          };
        },
            peg$c25 = "select",
            peg$c26 = {
          type: "literal",
          value: "select",
          description: "\"select\""
        },
            peg$c27 = function (options) {
          return {
            type: 'selectFormat',
            options: options,
            location: location()
          };
        },
            peg$c28 = "=",
            peg$c29 = {
          type: "literal",
          value: "=",
          description: "\"=\""
        },
            peg$c30 = function (selector, pattern) {
          return {
            type: 'optionalFormatPattern',
            selector: selector,
            value: pattern,
            location: location()
          };
        },
            peg$c31 = "offset:",
            peg$c32 = {
          type: "literal",
          value: "offset:",
          description: "\"offset:\""
        },
            peg$c33 = function (number) {
          return number;
        },
            peg$c34 = function (offset, options) {
          return {
            type: 'pluralFormat',
            offset: offset,
            options: options,
            location: location()
          };
        },
            peg$c35 = {
          type: "other",
          description: "whitespace"
        },
            peg$c36 = /^[ \t\n\r]/,
            peg$c37 = {
          type: "class",
          value: "[ \\t\\n\\r]",
          description: "[ \\t\\n\\r]"
        },
            peg$c38 = {
          type: "other",
          description: "optionalWhitespace"
        },
            peg$c39 = /^[0-9]/,
            peg$c40 = {
          type: "class",
          value: "[0-9]",
          description: "[0-9]"
        },
            peg$c41 = /^[0-9a-f]/i,
            peg$c42 = {
          type: "class",
          value: "[0-9a-f]i",
          description: "[0-9a-f]i"
        },
            peg$c43 = "0",
            peg$c44 = {
          type: "literal",
          value: "0",
          description: "\"0\""
        },
            peg$c45 = /^[1-9]/,
            peg$c46 = {
          type: "class",
          value: "[1-9]",
          description: "[1-9]"
        },
            peg$c47 = function (digits) {
          return parseInt(digits, 10);
        },
            peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
            peg$c49 = {
          type: "class",
          value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
          description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
        },
            peg$c50 = "\\\\",
            peg$c51 = {
          type: "literal",
          value: "\\\\",
          description: "\"\\\\\\\\\""
        },
            peg$c52 = function () {
          return '\\';
        },
            peg$c53 = "\\#",
            peg$c54 = {
          type: "literal",
          value: "\\#",
          description: "\"\\\\#\""
        },
            peg$c55 = function () {
          return '\\#';
        },
            peg$c56 = "\\{",
            peg$c57 = {
          type: "literal",
          value: "\\{",
          description: "\"\\\\{\""
        },
            peg$c58 = function () {
          return '\u007B';
        },
            peg$c59 = "\\}",
            peg$c60 = {
          type: "literal",
          value: "\\}",
          description: "\"\\\\}\""
        },
            peg$c61 = function () {
          return '\u007D';
        },
            peg$c62 = "\\u",
            peg$c63 = {
          type: "literal",
          value: "\\u",
          description: "\"\\\\u\""
        },
            peg$c64 = function (digits) {
          return String.fromCharCode(parseInt(digits, 16));
        },
            peg$c65 = function (chars) {
          return chars.join('');
        },
            peg$currPos = 0,
            peg$savedPos = 0,
            peg$posDetailsCache = [{
          line: 1,
          column: 1,
          seenCR: false
        }],
            peg$maxFailPos = 0,
            peg$maxFailExpected = [],
            peg$silentFails = 0,
            peg$result;

        if ("startRule" in options) {
          if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
          }

          peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }

        function location() {
          return peg$computeLocation(peg$savedPos, peg$currPos);
        }

        function peg$computePosDetails(pos) {
          var details = peg$posDetailsCache[pos],
              p,
              ch;

          if (details) {
            return details;
          } else {
            p = pos - 1;

            while (!peg$posDetailsCache[p]) {
              p--;
            }

            details = peg$posDetailsCache[p];
            details = {
              line: details.line,
              column: details.column,
              seenCR: details.seenCR
            };

            while (p < pos) {
              ch = input.charAt(p);

              if (ch === "\n") {
                if (!details.seenCR) {
                  details.line++;
                }

                details.column = 1;
                details.seenCR = false;
              } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
                details.line++;
                details.column = 1;
                details.seenCR = true;
              } else {
                details.column++;
                details.seenCR = false;
              }

              p++;
            }

            peg$posDetailsCache[pos] = details;
            return details;
          }
        }

        function peg$computeLocation(startPos, endPos) {
          var startPosDetails = peg$computePosDetails(startPos),
              endPosDetails = peg$computePosDetails(endPos);
          return {
            start: {
              offset: startPos,
              line: startPosDetails.line,
              column: startPosDetails.column
            },
            end: {
              offset: endPos,
              line: endPosDetails.line,
              column: endPosDetails.column
            }
          };
        }

        function peg$fail(expected) {
          if (peg$currPos < peg$maxFailPos) {
            return;
          }

          if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
          }

          peg$maxFailExpected.push(expected);
        }

        function peg$buildException(message, expected, found, location) {
          function cleanupExpected(expected) {
            var i = 1;
            expected.sort(function (a, b) {
              if (a.description < b.description) {
                return -1;
              } else if (a.description > b.description) {
                return 1;
              } else {
                return 0;
              }
            });

            while (i < expected.length) {
              if (expected[i - 1] === expected[i]) {
                expected.splice(i, 1);
              } else {
                i++;
              }
            }
          }

          function buildMessage(expected, found) {
            function stringEscape(s) {
              function hex(ch) {
                return ch.charCodeAt(0).toString(16).toUpperCase();
              }

              return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
                return '\\x0' + hex(ch);
              }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
                return '\\x' + hex(ch);
              }).replace(/[\u0100-\u0FFF]/g, function (ch) {
                return '\\u0' + hex(ch);
              }).replace(/[\u1000-\uFFFF]/g, function (ch) {
                return '\\u' + hex(ch);
              });
            }

            var expectedDescs = new Array(expected.length),
                expectedDesc,
                foundDesc,
                i;

            for (i = 0; i < expected.length; i++) {
              expectedDescs[i] = expected[i].description;
            }

            expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];
            foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
            return "Expected " + expectedDesc + " but " + foundDesc + " found.";
          }

          if (expected !== null) {
            cleanupExpected(expected);
          }

          return new peg$SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, location);
        }

        function peg$parsestart() {
          var s0;
          s0 = peg$parsemessageFormatPattern();
          return s0;
        }

        function peg$parsemessageFormatPattern() {
          var s0, s1, s2;
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parsemessageFormatElement();

          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsemessageFormatElement();
          }

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c0(s1);
          }

          s0 = s1;
          return s0;
        }

        function peg$parsemessageFormatElement() {
          var s0;
          s0 = peg$parsemessageTextElement();

          if (s0 === peg$FAILED) {
            s0 = peg$parseargumentElement();
          }

          return s0;
        }

        function peg$parsemessageText() {
          var s0, s1, s2, s3, s4, s5;
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$currPos;
          s3 = peg$parse_();

          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();

            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();

              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$currPos;
              s3 = peg$parse_();

              if (s3 !== peg$FAILED) {
                s4 = peg$parsechars();

                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();

                  if (s5 !== peg$FAILED) {
                    s3 = [s3, s4, s5];
                    s2 = s3;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            }
          } else {
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c1(s1);
          }

          s0 = s1;

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsews();

            if (s1 !== peg$FAILED) {
              s0 = input.substring(s0, peg$currPos);
            } else {
              s0 = s1;
            }
          }

          return s0;
        }

        function peg$parsemessageTextElement() {
          var s0, s1;
          s0 = peg$currPos;
          s1 = peg$parsemessageText();

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c2(s1);
          }

          s0 = s1;
          return s0;
        }

        function peg$parseargument() {
          var s0, s1, s2;
          s0 = peg$parsenumber();

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = [];

            if (peg$c3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c4);
              }
            }

            if (s2 !== peg$FAILED) {
              while (s2 !== peg$FAILED) {
                s1.push(s2);

                if (peg$c3.test(input.charAt(peg$currPos))) {
                  s2 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c4);
                  }
                }
              }
            } else {
              s1 = peg$FAILED;
            }

            if (s1 !== peg$FAILED) {
              s0 = input.substring(s0, peg$currPos);
            } else {
              s0 = s1;
            }
          }

          return s0;
        }

        function peg$parseargumentElement() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8;
          s0 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c5;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              s3 = peg$parseargument();

              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();

                if (s4 !== peg$FAILED) {
                  s5 = peg$currPos;

                  if (input.charCodeAt(peg$currPos) === 44) {
                    s6 = peg$c7;
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c8);
                    }
                  }

                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();

                    if (s7 !== peg$FAILED) {
                      s8 = peg$parseelementFormat();

                      if (s8 !== peg$FAILED) {
                        s6 = [s6, s7, s8];
                        s5 = s6;
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }

                  if (s5 === peg$FAILED) {
                    s5 = null;
                  }

                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse_();

                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s7 = peg$c9;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c10);
                        }
                      }

                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c11(s3, s5);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parseelementFormat() {
          var s0;
          s0 = peg$parsesimpleFormat();

          if (s0 === peg$FAILED) {
            s0 = peg$parsepluralFormat();

            if (s0 === peg$FAILED) {
              s0 = peg$parseselectOrdinalFormat();

              if (s0 === peg$FAILED) {
                s0 = peg$parseselectFormat();
              }
            }
          }

          return s0;
        }

        function peg$parsesimpleFormat() {
          var s0, s1, s2, s3, s4, s5, s6;
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 6) === peg$c12) {
            s1 = peg$c12;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c13);
            }
          }

          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 4) === peg$c14) {
              s1 = peg$c14;
              peg$currPos += 4;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c15);
              }
            }

            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c16) {
                s1 = peg$c16;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c17);
                }
              }
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;

              if (input.charCodeAt(peg$currPos) === 44) {
                s4 = peg$c7;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }

              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();

                if (s5 !== peg$FAILED) {
                  s6 = peg$parsechars();

                  if (s6 !== peg$FAILED) {
                    s4 = [s4, s5, s6];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }

              if (s3 === peg$FAILED) {
                s3 = null;
              }

              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c18(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parsepluralFormat() {
          var s0, s1, s2, s3, s4, s5;
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 6) === peg$c19) {
            s1 = peg$c19;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c20);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s3 = peg$c7;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }

              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();

                if (s4 !== peg$FAILED) {
                  s5 = peg$parsepluralStyle();

                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c21(s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parseselectOrdinalFormat() {
          var s0, s1, s2, s3, s4, s5;
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 13) === peg$c22) {
            s1 = peg$c22;
            peg$currPos += 13;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c23);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s3 = peg$c7;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }

              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();

                if (s4 !== peg$FAILED) {
                  s5 = peg$parsepluralStyle();

                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c24(s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parseselectFormat() {
          var s0, s1, s2, s3, s4, s5, s6;
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 6) === peg$c25) {
            s1 = peg$c25;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c26);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s3 = peg$c7;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }

              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();

                if (s4 !== peg$FAILED) {
                  s5 = [];
                  s6 = peg$parseoptionalFormatPattern();

                  if (s6 !== peg$FAILED) {
                    while (s6 !== peg$FAILED) {
                      s5.push(s6);
                      s6 = peg$parseoptionalFormatPattern();
                    }
                  } else {
                    s5 = peg$FAILED;
                  }

                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c27(s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parseselector() {
          var s0, s1, s2, s3;
          s0 = peg$currPos;
          s1 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 61) {
            s2 = peg$c28;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c29);
            }
          }

          if (s2 !== peg$FAILED) {
            s3 = peg$parsenumber();

            if (s3 !== peg$FAILED) {
              s2 = [s2, s3];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
          } else {
            s0 = s1;
          }

          if (s0 === peg$FAILED) {
            s0 = peg$parsechars();
          }

          return s0;
        }

        function peg$parseoptionalFormatPattern() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8;
          s0 = peg$currPos;
          s1 = peg$parse_();

          if (s1 !== peg$FAILED) {
            s2 = peg$parseselector();

            if (s2 !== peg$FAILED) {
              s3 = peg$parse_();

              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 123) {
                  s4 = peg$c5;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c6);
                  }
                }

                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();

                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsemessageFormatPattern();

                    if (s6 !== peg$FAILED) {
                      s7 = peg$parse_();

                      if (s7 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s8 = peg$c9;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c10);
                          }
                        }

                        if (s8 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c30(s2, s6);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parseoffset() {
          var s0, s1, s2, s3;
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 7) === peg$c31) {
            s1 = peg$c31;
            peg$currPos += 7;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c32);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              s3 = peg$parsenumber();

              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c33(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parsepluralStyle() {
          var s0, s1, s2, s3, s4;
          s0 = peg$currPos;
          s1 = peg$parseoffset();

          if (s1 === peg$FAILED) {
            s1 = null;
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();

            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parseoptionalFormatPattern();

              if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  s4 = peg$parseoptionalFormatPattern();
                }
              } else {
                s3 = peg$FAILED;
              }

              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c34(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          return s0;
        }

        function peg$parsews() {
          var s0, s1;
          peg$silentFails++;
          s0 = [];

          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c37);
            }
          }

          if (s1 !== peg$FAILED) {
            while (s1 !== peg$FAILED) {
              s0.push(s1);

              if (peg$c36.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c37);
                }
              }
            }
          } else {
            s0 = peg$FAILED;
          }

          peg$silentFails--;

          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c35);
            }
          }

          return s0;
        }

        function peg$parse_() {
          var s0, s1, s2;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parsews();

          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsews();
          }

          if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
          } else {
            s0 = s1;
          }

          peg$silentFails--;

          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c38);
            }
          }

          return s0;
        }

        function peg$parsedigit() {
          var s0;

          if (peg$c39.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c40);
            }
          }

          return s0;
        }

        function peg$parsehexDigit() {
          var s0;

          if (peg$c41.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c42);
            }
          }

          return s0;
        }

        function peg$parsenumber() {
          var s0, s1, s2, s3, s4, s5;
          s0 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 48) {
            s1 = peg$c43;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c44);
            }
          }

          if (s1 === peg$FAILED) {
            s1 = peg$currPos;
            s2 = peg$currPos;

            if (peg$c45.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c46);
              }
            }

            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = peg$parsedigit();

              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parsedigit();
              }

              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }

            if (s2 !== peg$FAILED) {
              s1 = input.substring(s1, peg$currPos);
            } else {
              s1 = s2;
            }
          }

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c47(s1);
          }

          s0 = s1;
          return s0;
        }

        function peg$parsechar() {
          var s0, s1, s2, s3, s4, s5, s6, s7;

          if (peg$c48.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c49);
            }
          }

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;

            if (input.substr(peg$currPos, 2) === peg$c50) {
              s1 = peg$c50;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c51);
              }
            }

            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c52();
            }

            s0 = s1;

            if (s0 === peg$FAILED) {
              s0 = peg$currPos;

              if (input.substr(peg$currPos, 2) === peg$c53) {
                s1 = peg$c53;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c54);
                }
              }

              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c55();
              }

              s0 = s1;

              if (s0 === peg$FAILED) {
                s0 = peg$currPos;

                if (input.substr(peg$currPos, 2) === peg$c56) {
                  s1 = peg$c56;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c57);
                  }
                }

                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c58();
                }

                s0 = s1;

                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;

                  if (input.substr(peg$currPos, 2) === peg$c59) {
                    s1 = peg$c59;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c60);
                    }
                  }

                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c61();
                  }

                  s0 = s1;

                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;

                    if (input.substr(peg$currPos, 2) === peg$c62) {
                      s1 = peg$c62;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c63);
                      }
                    }

                    if (s1 !== peg$FAILED) {
                      s2 = peg$currPos;
                      s3 = peg$currPos;
                      s4 = peg$parsehexDigit();

                      if (s4 !== peg$FAILED) {
                        s5 = peg$parsehexDigit();

                        if (s5 !== peg$FAILED) {
                          s6 = peg$parsehexDigit();

                          if (s6 !== peg$FAILED) {
                            s7 = peg$parsehexDigit();

                            if (s7 !== peg$FAILED) {
                              s4 = [s4, s5, s6, s7];
                              s3 = s4;
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }

                      if (s3 !== peg$FAILED) {
                        s2 = input.substring(s2, peg$currPos);
                      } else {
                        s2 = s3;
                      }

                      if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c64(s2);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  }
                }
              }
            }
          }

          return s0;
        }

        function peg$parsechars() {
          var s0, s1, s2;
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parsechar();

          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$parsechar();
            }
          } else {
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c65(s1);
          }

          s0 = s1;
          return s0;
        }

        peg$result = peg$startRuleFunction();

        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
          return peg$result;
        } else {
          if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail({
              type: "end",
              description: "end of input"
            });
          }

          throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
        }
      }

      return {
        SyntaxError: peg$SyntaxError,
        parse: peg$parse
      };
    })();

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    function MessageFormat(message, locales, formats) {
      // Parse string messages into an AST.
      var ast = typeof message === 'string' ? MessageFormat.__parse(message) : message;

      if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
      } // Creates a new object with the specified `formats` merged with the default
      // formats.


      formats = this._mergeFormats(MessageFormat.formats, formats); // Defined first because it's used to build the format pattern.

      defineProperty(this, '_locale', {
        value: this._resolveLocale(locales)
      }); // Compile the `ast` to a pattern that is highly optimized for repeated
      // `format()` invocations. **Note:** This passes the `locales` set provided
      // to the constructor instead of just the resolved locale.

      var pluralFn = this._findPluralRuleFunction(this._locale);

      var pattern = this._compilePattern(ast, locales, formats, pluralFn); // "Bind" `format()` method to `this` so it can be passed by reference like
      // the other `Intl` APIs.


      var messageFormat = this;

      this.format = function (values) {
        try {
          return messageFormat._format(pattern, values);
        } catch (e) {
          if (e.variableId) {
            throw new Error('The intl string context variable \'' + e.variableId + '\'' + ' was not provided to the string \'' + message + '\'');
          } else {
            throw e;
          }
        }
      };
    } // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.


    defineProperty(MessageFormat, 'formats', {
      enumerable: true,
      value: {
        number: {
          'currency': {
            style: 'currency'
          },
          'percent': {
            style: 'percent'
          }
        },
        date: {
          'short': {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit'
          },
          'medium': {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          },
          'long': {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          },
          'full': {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }
        },
        time: {
          'short': {
            hour: 'numeric',
            minute: 'numeric'
          },
          'medium': {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          },
          'long': {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          },
          'full': {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          }
        }
      }
    }); // Define internal private properties for dealing with locale data.

    defineProperty(MessageFormat, '__localeData__', {
      value: objCreate(null)
    });
    defineProperty(MessageFormat, '__addLocaleData', {
      value: function (data) {
        if (!(data && data.locale)) {
          throw new Error('Locale data provided to IntlMessageFormat is missing a ' + '`locale` property');
        }

        MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
      }
    }); // Defines `__parse()` static method as an exposed private.

    defineProperty(MessageFormat, '__parse', {
      value: parser.parse
    }); // Define public `defaultLocale` property which defaults to English, but can be
    // set by the developer.

    defineProperty(MessageFormat, 'defaultLocale', {
      enumerable: true,
      writable: true,
      value: undefined
    });

    MessageFormat.prototype.resolvedOptions = function () {
      // TODO: Provide anything else?
      return {
        locale: this._locale
      };
    };

    MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
      var compiler = new Compiler(locales, formats, pluralFn);
      return compiler.compile(ast);
    };

    MessageFormat.prototype._findPluralRuleFunction = function (locale) {
      var localeData = MessageFormat.__localeData__;
      var data = localeData[locale.toLowerCase()]; // The locale data is de-duplicated, so we have to traverse the locale's
      // hierarchy until we find a `pluralRuleFunction` to return.

      while (data) {
        if (data.pluralRuleFunction) {
          return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
      }

      throw new Error('Locale data added to IntlMessageFormat is missing a ' + '`pluralRuleFunction` for :' + locale);
    };

    MessageFormat.prototype._format = function (pattern, values) {
      var result = '',
          i,
          len,
          part,
          id,
          value,
          err;

      for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i]; // Exist early for string parts.

        if (typeof part === 'string') {
          result += part;
          continue;
        }

        id = part.id; // Enforce that all required values are provided by the caller.

        if (!(values && hop.call(values, id))) {
          err = new Error('A value must be provided for: ' + id);
          err.variableId = id;
          throw err;
        }

        value = values[id]; // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.

        if (part.options) {
          result += this._format(part.getOption(value), values);
        } else {
          result += part.format(value);
        }
      }

      return result;
    };

    MessageFormat.prototype._mergeFormats = function (defaults, formats) {
      var mergedFormats = {},
          type,
          mergedType;

      for (type in defaults) {
        if (!hop.call(defaults, type)) {
          continue;
        }

        mergedFormats[type] = mergedType = objCreate(defaults[type]);

        if (formats && hop.call(formats, type)) {
          extend(mergedType, formats[type]);
        }
      }

      return mergedFormats;
    };

    MessageFormat.prototype._resolveLocale = function (locales) {
      if (typeof locales === 'string') {
        locales = [locales];
      } // Create a copy of the array so we can push on the default locale.


      locales = (locales || []).concat(MessageFormat.defaultLocale);
      var localeData = MessageFormat.__localeData__;
      var i, len, localeParts, data; // Using the set of locales + the default locale, we look for the first one
      // which that has been registered. When data does not exist for a locale, we
      // traverse its ancestors to find something that's been registered within
      // its hierarchy of locales. Since we lack the proper `parentLocale` data
      // here, we must take a naive approach to traversal.

      for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
          data = localeData[localeParts.join('-')];

          if (data) {
            // Return the normalized locale string; e.g., we return "en-US",
            // instead of "en-us".
            return data.locale;
          }

          localeParts.pop();
        }
      }

      var defaultLocale = locales.pop();
      throw new Error('No locale data has been added to IntlMessageFormat for: ' + locales.join(', ') + ', or the default locale: ' + defaultLocale);
    };

    // GENERATED FILE
    var defaultLocale = {
      "locale": "en",
      "pluralRuleFunction": function (n, ord) {
        var s = String(n).split("."),
            v0 = !s[1],
            t0 = Number(s[0]) == n,
            n10 = t0 && s[0].slice(-1),
            n100 = t0 && s[0].slice(-2);
        if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
        return n == 1 && v0 ? "one" : "other";
      }
    };

    /* jslint esnext: true */

    MessageFormat.__addLocaleData(defaultLocale);

    MessageFormat.defaultLocale = 'en';

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    /* jslint esnext: true */
    var round = Math.round;

    function daysToYears(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      return days * 400 / 146097;
    }

    function diff (from, to) {
      // Convert to ms timestamps.
      from = +from;
      to = +to;
      var millisecond = round(to - from),
          second = round(millisecond / 1000),
          minute = round(second / 60),
          hour = round(minute / 60),
          day = round(hour / 24),
          week = round(day / 7);
      var rawYears = daysToYears(day),
          month = round(rawYears * 12),
          year = round(rawYears);
      return {
        millisecond: millisecond,
        second: second,
        'second-short': second,
        minute: minute,
        'minute-short': minute,
        hour: hour,
        'hour-short': hour,
        day: day,
        'day-short': day,
        week: week,
        'week-short': week,
        month: month,
        'month-short': month,
        year: year,
        'year-short': year
      };
    }

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    /* jslint esnext: true */
    // Purposely using the same implementation as the Intl.js `Intl` polyfill.
    // Copyright 2013 Andy Earnshaw, MIT License
    var hop$1 = Object.prototype.hasOwnProperty;
    var toString = Object.prototype.toString;

    var realDefineProp$1 = function () {
      try {
        return !!Object.defineProperty({}, 'a', {});
      } catch (e) {
        return false;
      }
    }();
    var defineProperty$1 = realDefineProp$1 ? Object.defineProperty : function (obj, name, desc) {
      if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
      } else if (!hop$1.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
      }
    };

    var objCreate$1 = Object.create || function (proto, props) {
      var obj, k;

      function F() {}

      F.prototype = proto;
      obj = new F();

      for (k in props) {
        if (hop$1.call(props, k)) {
          defineProperty$1(obj, k, props[k]);
        }
      }

      return obj;
    };

    var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
      /*jshint validthis:true */
      var arr = this;

      if (!arr.length) {
        return -1;
      }

      for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
        if (arr[i] === search) {
          return i;
        }
      }

      return -1;
    };

    var isArray = Array.isArray || function (obj) {
      return toString.call(obj) === '[object Array]';
    };

    var dateNow = Date.now || function () {
      return new Date().getTime();
    };

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    var FIELDS = ['second', 'second-short', 'minute', 'minute-short', 'hour', 'hour-short', 'day', 'day-short', 'month', 'month-short', 'year', 'year-short'];
    var STYLES = ['best fit', 'numeric']; // -- RelativeFormat -----------------------------------------------------------

    function RelativeFormat(locales, options) {
      options = options || {}; // Make a copy of `locales` if it's an array, so that it doesn't change
      // since it's used lazily.

      if (isArray(locales)) {
        locales = locales.concat();
      }

      defineProperty$1(this, '_locale', {
        value: this._resolveLocale(locales)
      });
      defineProperty$1(this, '_options', {
        value: {
          style: this._resolveStyle(options.style),
          units: this._isValidUnits(options.units) && options.units
        }
      });
      defineProperty$1(this, '_locales', {
        value: locales
      });
      defineProperty$1(this, '_fields', {
        value: this._findFields(this._locale)
      });
      defineProperty$1(this, '_messages', {
        value: objCreate$1(null)
      }); // "Bind" `format()` method to `this` so it can be passed by reference like
      // the other `Intl` APIs.

      var relativeFormat = this;

      this.format = function format(date, options) {
        return relativeFormat._format(date, options);
      };
    } // Define internal private properties for dealing with locale data.


    defineProperty$1(RelativeFormat, '__localeData__', {
      value: objCreate$1(null)
    });
    defineProperty$1(RelativeFormat, '__addLocaleData', {
      value: function (data) {
        if (!(data && data.locale)) {
          throw new Error('Locale data provided to IntlRelativeFormat is missing a ' + '`locale` property value');
        }

        RelativeFormat.__localeData__[data.locale.toLowerCase()] = data; // Add data to IntlMessageFormat.

        MessageFormat.__addLocaleData(data);
      }
    }); // Define public `defaultLocale` property which can be set by the developer, or
    // it will be set when the first RelativeFormat instance is created by
    // leveraging the resolved locale from `Intl`.

    defineProperty$1(RelativeFormat, 'defaultLocale', {
      enumerable: true,
      writable: true,
      value: undefined
    }); // Define public `thresholds` property which can be set by the developer, and
    // defaults to relative time thresholds from moment.js.

    defineProperty$1(RelativeFormat, 'thresholds', {
      enumerable: true,
      value: {
        second: 45,
        'second-short': 45,
        // seconds to minute
        minute: 45,
        'minute-short': 45,
        // minutes to hour
        hour: 22,
        'hour-short': 22,
        // hours to day
        day: 26,
        'day-short': 26,
        // days to month
        month: 11,
        'month-short': 11 // months to year

      }
    });

    RelativeFormat.prototype.resolvedOptions = function () {
      return {
        locale: this._locale,
        style: this._options.style,
        units: this._options.units
      };
    };

    RelativeFormat.prototype._compileMessage = function (units) {
      // `this._locales` is the original set of locales the user specified to the
      // constructor, while `this._locale` is the resolved root locale.
      var locales = this._locales;
      var resolvedLocale = this._locale;
      var field = this._fields[units];
      var relativeTime = field.relativeTime;
      var future = '';
      var past = '';
      var i;

      for (i in relativeTime.future) {
        if (relativeTime.future.hasOwnProperty(i)) {
          future += ' ' + i + ' {' + relativeTime.future[i].replace('{0}', '#') + '}';
        }
      }

      for (i in relativeTime.past) {
        if (relativeTime.past.hasOwnProperty(i)) {
          past += ' ' + i + ' {' + relativeTime.past[i].replace('{0}', '#') + '}';
        }
      }

      var message = '{when, select, future {{0, plural, ' + future + '}}' + 'past {{0, plural, ' + past + '}}}'; // Create the synthetic IntlMessageFormat instance using the original
      // locales value specified by the user when constructing the the parent
      // IntlRelativeFormat instance.

      return new MessageFormat(message, locales);
    };

    RelativeFormat.prototype._getMessage = function (units) {
      var messages = this._messages; // Create a new synthetic message based on the locale data from CLDR.

      if (!messages[units]) {
        messages[units] = this._compileMessage(units);
      }

      return messages[units];
    };

    RelativeFormat.prototype._getRelativeUnits = function (diff$$1, units) {
      var field = this._fields[units];

      if (field.relative) {
        return field.relative[diff$$1];
      }
    };

    RelativeFormat.prototype._findFields = function (locale) {
      var localeData = RelativeFormat.__localeData__;
      var data = localeData[locale.toLowerCase()]; // The locale data is de-duplicated, so we have to traverse the locale's
      // hierarchy until we find `fields` to return.

      while (data) {
        if (data.fields) {
          return data.fields;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
      }

      throw new Error('Locale data added to IntlRelativeFormat is missing `fields` for :' + locale);
    };

    RelativeFormat.prototype._format = function (date, options) {
      var now = options && options.now !== undefined ? options.now : dateNow();

      if (date === undefined) {
        date = now;
      } // Determine if the `date` and optional `now` values are valid, and throw a
      // similar error to what `Intl.DateTimeFormat#format()` would throw.


      if (!isFinite(now)) {
        throw new RangeError('The `now` option provided to IntlRelativeFormat#format() is not ' + 'in valid range.');
      }

      if (!isFinite(date)) {
        throw new RangeError('The date value provided to IntlRelativeFormat#format() is not ' + 'in valid range.');
      }

      var diffReport = diff(now, date);

      var units = this._options.units || this._selectUnits(diffReport);

      var diffInUnits = diffReport[units];

      if (this._options.style !== 'numeric') {
        var relativeUnits = this._getRelativeUnits(diffInUnits, units);

        if (relativeUnits) {
          return relativeUnits;
        }
      }

      return this._getMessage(units).format({
        '0': Math.abs(diffInUnits),
        when: diffInUnits < 0 ? 'past' : 'future'
      });
    };

    RelativeFormat.prototype._isValidUnits = function (units) {
      if (!units || arrIndexOf.call(FIELDS, units) >= 0) {
        return true;
      }

      if (typeof units === 'string') {
        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);

        if (suggestion && arrIndexOf.call(FIELDS, suggestion) >= 0) {
          throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` ' + 'value, did you mean: ' + suggestion);
        }
      }

      throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' + 'must be one of: "' + FIELDS.join('", "') + '"');
    };

    RelativeFormat.prototype._resolveLocale = function (locales) {
      if (typeof locales === 'string') {
        locales = [locales];
      } // Create a copy of the array so we can push on the default locale.


      locales = (locales || []).concat(RelativeFormat.defaultLocale);
      var localeData = RelativeFormat.__localeData__;
      var i, len, localeParts, data; // Using the set of locales + the default locale, we look for the first one
      // which that has been registered. When data does not exist for a locale, we
      // traverse its ancestors to find something that's been registered within
      // its hierarchy of locales. Since we lack the proper `parentLocale` data
      // here, we must take a naive approach to traversal.

      for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
          data = localeData[localeParts.join('-')];

          if (data) {
            // Return the normalized locale string; e.g., we return "en-US",
            // instead of "en-us".
            return data.locale;
          }

          localeParts.pop();
        }
      }

      var defaultLocale = locales.pop();
      throw new Error('No locale data has been added to IntlRelativeFormat for: ' + locales.join(', ') + ', or the default locale: ' + defaultLocale);
    };

    RelativeFormat.prototype._resolveStyle = function (style) {
      // Default to "best fit" style.
      if (!style) {
        return STYLES[0];
      }

      if (arrIndexOf.call(STYLES, style) >= 0) {
        return style;
      }

      throw new Error('"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' + 'must be one of: "' + STYLES.join('", "') + '"');
    };

    RelativeFormat.prototype._selectUnits = function (diffReport) {
      var i, l, units;
      var fields = FIELDS.filter(function (field) {
        return field.indexOf('-short') < 1;
      });

      for (i = 0, l = fields.length; i < l; i += 1) {
        units = fields[i];

        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
          break;
        }
      }

      return units;
    };

    // GENERATED FILE
    var defaultLocale$1 = {
      "locale": "en",
      "pluralRuleFunction": function (n, ord) {
        var s = String(n).split("."),
            v0 = !s[1],
            t0 = Number(s[0]) == n,
            n10 = t0 && s[0].slice(-1),
            n100 = t0 && s[0].slice(-2);
        if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
        return n == 1 && v0 ? "one" : "other";
      },
      "fields": {
        "year": {
          "displayName": "year",
          "relative": {
            "0": "this year",
            "1": "next year",
            "-1": "last year"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} year",
              "other": "in {0} years"
            },
            "past": {
              "one": "{0} year ago",
              "other": "{0} years ago"
            }
          }
        },
        "year-short": {
          "displayName": "yr.",
          "relative": {
            "0": "this yr.",
            "1": "next yr.",
            "-1": "last yr."
          },
          "relativeTime": {
            "future": {
              "one": "in {0} yr.",
              "other": "in {0} yr."
            },
            "past": {
              "one": "{0} yr. ago",
              "other": "{0} yr. ago"
            }
          }
        },
        "month": {
          "displayName": "month",
          "relative": {
            "0": "this month",
            "1": "next month",
            "-1": "last month"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} month",
              "other": "in {0} months"
            },
            "past": {
              "one": "{0} month ago",
              "other": "{0} months ago"
            }
          }
        },
        "month-short": {
          "displayName": "mo.",
          "relative": {
            "0": "this mo.",
            "1": "next mo.",
            "-1": "last mo."
          },
          "relativeTime": {
            "future": {
              "one": "in {0} mo.",
              "other": "in {0} mo."
            },
            "past": {
              "one": "{0} mo. ago",
              "other": "{0} mo. ago"
            }
          }
        },
        "day": {
          "displayName": "day",
          "relative": {
            "0": "today",
            "1": "tomorrow",
            "-1": "yesterday"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} day",
              "other": "in {0} days"
            },
            "past": {
              "one": "{0} day ago",
              "other": "{0} days ago"
            }
          }
        },
        "day-short": {
          "displayName": "day",
          "relative": {
            "0": "today",
            "1": "tomorrow",
            "-1": "yesterday"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} day",
              "other": "in {0} days"
            },
            "past": {
              "one": "{0} day ago",
              "other": "{0} days ago"
            }
          }
        },
        "hour": {
          "displayName": "hour",
          "relative": {
            "0": "this hour"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} hour",
              "other": "in {0} hours"
            },
            "past": {
              "one": "{0} hour ago",
              "other": "{0} hours ago"
            }
          }
        },
        "hour-short": {
          "displayName": "hr.",
          "relative": {
            "0": "this hour"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} hr.",
              "other": "in {0} hr."
            },
            "past": {
              "one": "{0} hr. ago",
              "other": "{0} hr. ago"
            }
          }
        },
        "minute": {
          "displayName": "minute",
          "relative": {
            "0": "this minute"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} minute",
              "other": "in {0} minutes"
            },
            "past": {
              "one": "{0} minute ago",
              "other": "{0} minutes ago"
            }
          }
        },
        "minute-short": {
          "displayName": "min.",
          "relative": {
            "0": "this minute"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} min.",
              "other": "in {0} min."
            },
            "past": {
              "one": "{0} min. ago",
              "other": "{0} min. ago"
            }
          }
        },
        "second": {
          "displayName": "second",
          "relative": {
            "0": "now"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} second",
              "other": "in {0} seconds"
            },
            "past": {
              "one": "{0} second ago",
              "other": "{0} seconds ago"
            }
          }
        },
        "second-short": {
          "displayName": "sec.",
          "relative": {
            "0": "now"
          },
          "relativeTime": {
            "future": {
              "one": "in {0} sec.",
              "other": "in {0} sec."
            },
            "past": {
              "one": "{0} sec. ago",
              "other": "{0} sec. ago"
            }
          }
        }
      }
    };

    /* jslint esnext: true */

    RelativeFormat.__addLocaleData(defaultLocale$1);

    RelativeFormat.defaultLocale = 'en';

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */
    function addLocaleData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var locales = Array.isArray(data) ? data : [data];
      locales.forEach(function (localeData) {
        if (localeData && localeData.locale) {
          MessageFormat.__addLocaleData(localeData);

          RelativeFormat.__addLocaleData(localeData);
        }
      });
    }
    function hasLocaleData(locale) {
      var localeParts = (locale || '').split('-');

      while (localeParts.length > 0) {
        if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
          return true;
        }

        localeParts.pop();
      }

      return false;
    }

    function hasIMFAndIRFLocaleData(locale) {
      var normalizedLocale = locale && locale.toLowerCase();
      return !!(MessageFormat.__localeData__[normalizedLocale] && RelativeFormat.__localeData__[normalizedLocale]);
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    var bool = PropTypes.bool,
        number = PropTypes.number,
        string = PropTypes.string,
        func = PropTypes.func,
        object = PropTypes.object,
        oneOf = PropTypes.oneOf,
        shape = PropTypes.shape,
        any = PropTypes.any,
        oneOfType = PropTypes.oneOfType;
    var localeMatcher = oneOf(['best fit', 'lookup']);
    var narrowShortLong = oneOf(['narrow', 'short', 'long']);
    var numeric2digit = oneOf(['numeric', '2-digit']);
    var funcReq = func.isRequired;
    var intlConfigPropTypes = {
      locale: string,
      timeZone: string,
      formats: object,
      messages: object,
      textComponent: any,
      defaultLocale: string,
      defaultFormats: object,
      onError: func
    };
    var intlFormatPropTypes = {
      formatDate: funcReq,
      formatTime: funcReq,
      formatRelative: funcReq,
      formatNumber: funcReq,
      formatPlural: funcReq,
      formatMessage: funcReq,
      formatHTMLMessage: funcReq
    };
    var intlShape = shape(_objectSpread({}, intlConfigPropTypes, intlFormatPropTypes, {
      formatters: object,
      now: funcReq
    }));
    var messageDescriptorPropTypes = {
      id: string.isRequired,
      description: oneOfType([string, object]),
      defaultMessage: string
    };
    var dateTimeFormatPropTypes = {
      localeMatcher: localeMatcher,
      formatMatcher: oneOf(['basic', 'best fit']),
      timeZone: string,
      hour12: bool,
      weekday: narrowShortLong,
      era: narrowShortLong,
      year: numeric2digit,
      month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
      day: numeric2digit,
      hour: numeric2digit,
      minute: numeric2digit,
      second: numeric2digit,
      timeZoneName: oneOf(['short', 'long'])
    };
    var numberFormatPropTypes = {
      localeMatcher: localeMatcher,
      style: oneOf(['decimal', 'currency', 'percent']),
      currency: string,
      currencyDisplay: oneOf(['symbol', 'code', 'name']),
      useGrouping: bool,
      minimumIntegerDigits: number,
      minimumFractionDigits: number,
      maximumFractionDigits: number,
      minimumSignificantDigits: number,
      maximumSignificantDigits: number
    };
    var relativeFormatPropTypes = {
      style: oneOf(['best fit', 'numeric']),
      units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year', 'second-short', 'minute-short', 'hour-short', 'day-short', 'month-short', 'year-short'])
    };
    var pluralFormatPropTypes = {
      style: oneOf(['cardinal', 'ordinal'])
    };

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */
    function defineMessages(messageDescriptors) {
      // This simply returns what's passed-in because it's meant to be a hook for
      // babel-plugin-react-intl.
      return messageDescriptors;
    }

    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */

    var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var defineProperty$2 = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);

          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];

          if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

            try {
              // Avoid failures from read-only properties
              defineProperty$2(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }

        return targetComponent;
      }

      return targetComponent;
    }

    var hoistNonReactStatics_cjs = hoistNonReactStatics;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var invariant = function (condition, format, a, b, c, d, e, f) {
      {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }

      if (!condition) {
        var error;

        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame

        throw error;
      }
    };

    var invariant_1 = invariant;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var key = '__global_unique_id__';

    var gud = function () {
      return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function makeEmptyFunction(arg) {
      return function () {
        return arg;
      };
    }
    /**
     * This function accepts and discards inputs; it has no side effects. This is
     * primarily useful idiomatically for overridable function endpoints which
     * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
     */


    var emptyFunction = function emptyFunction() {};

    emptyFunction.thatReturns = makeEmptyFunction;
    emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction.thatReturnsNull = makeEmptyFunction(null);

    emptyFunction.thatReturnsThis = function () {
      return this;
    };

    emptyFunction.thatReturnsArgument = function (arg) {
      return arg;
    };

    var emptyFunction_1 = emptyFunction;

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var warning = emptyFunction_1;

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.error(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      warning = function warning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (format.indexOf('Failed Composite propType: ') === 0) {
          return; // Ignore CompositeComponent proptype check.
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var warning_1 = warning;

    var implementation = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(PropTypes);



    var _gud2 = _interopRequireDefault(gud);



    var _warning2 = _interopRequireDefault(warning_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MAX_SIGNED_31_BIT_INT = 1073741823; // Inlined Object.is polyfill.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

    function objectIs(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }

    function createEventEmitter(value) {
      var handlers = [];
      return {
        on: function on(handler) {
          handlers.push(handler);
        },
        off: function off(handler) {
          handlers = handlers.filter(function (h) {
            return h !== handler;
          });
        },
        get: function get() {
          return value;
        },
        set: function set(newValue, changedBits) {
          value = newValue;
          handlers.forEach(function (handler) {
            return handler(value, changedBits);
          });
        }
      };
    }

    function onlyChild(children) {
      return Array.isArray(children) ? children[0] : children;
    }

    function createReactContext(defaultValue, calculateChangedBits) {
      var _Provider$childContex, _Consumer$contextType;

      var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

      var Provider = function (_Component) {
        _inherits(Provider, _Component);

        function Provider() {
          var _temp, _this, _ret;

          _classCallCheck(this, Provider);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
        }

        Provider.prototype.getChildContext = function getChildContext() {
          var _ref;

          return _ref = {}, _ref[contextProp] = this.emitter, _ref;
        };

        Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (this.props.value !== nextProps.value) {
            var oldValue = this.props.value;
            var newValue = nextProps.value;
            var changedBits = void 0;

            if (objectIs(oldValue, newValue)) {
              changedBits = 0; // No change
            } else {
              changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

              {
                (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
              }

              changedBits |= 0;

              if (changedBits !== 0) {
                this.emitter.set(nextProps.value, changedBits);
              }
            }
          }
        };

        Provider.prototype.render = function render() {
          return this.props.children;
        };

        return Provider;
      }(React__default.Component);

      Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

      var Consumer = function (_Component2) {
        _inherits(Consumer, _Component2);

        function Consumer() {
          var _temp2, _this2, _ret2;

          _classCallCheck(this, Consumer);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
            value: _this2.getValue()
          }, _this2.onUpdate = function (newValue, changedBits) {
            var observedBits = _this2.observedBits | 0;

            if ((observedBits & changedBits) !== 0) {
              _this2.setState({
                value: _this2.getValue()
              });
            }
          }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }

        Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          var observedBits = nextProps.observedBits;
          this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
          : observedBits;
        };

        Consumer.prototype.componentDidMount = function componentDidMount() {
          if (this.context[contextProp]) {
            this.context[contextProp].on(this.onUpdate);
          }

          var observedBits = this.props.observedBits;
          this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
          : observedBits;
        };

        Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.context[contextProp]) {
            this.context[contextProp].off(this.onUpdate);
          }
        };

        Consumer.prototype.getValue = function getValue() {
          if (this.context[contextProp]) {
            return this.context[contextProp].get();
          } else {
            return defaultValue;
          }
        };

        Consumer.prototype.render = function render() {
          return onlyChild(this.props.children)(this.state.value);
        };

        return Consumer;
      }(React__default.Component);

      Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
      return {
        Provider: Provider,
        Consumer: Consumer
      };
    }

    exports.default = createReactContext;
    module.exports = exports['default'];
    });

    unwrapExports(implementation);

    var lib = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _react2 = _interopRequireDefault(React__default);



    var _implementation2 = _interopRequireDefault(implementation);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = _react2.default.createContext || _implementation2.default;
    module.exports = exports['default'];
    });

    var createContext = unwrapExports(lib);

    var ESCAPED_CHARS = {
      "\"&\"": '&amp;',
      "\">\"": '&gt;',
      "\"<\"": '&lt;',
      "'\"'": '&quot;',
      "\"'\"": '&#x27;'
    };
    var UNSAFE_CHARS_REGEX = /[&><"']/g;
    function escape(str) {
      return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
        return ESCAPED_CHARS[match];
      });
    }
    function filterProps(props, whitelist) {
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return whitelist.reduce(function (filtered, name) {
        if (props.hasOwnProperty(name)) {
          filtered[name] = props[name];
        } else if (defaults.hasOwnProperty(name)) {
          filtered[name] = defaults[name];
        }

        return filtered;
      }, {});
    }
    function invariantIntlContext() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          intl = _ref.intl;

      invariant_1(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
    }
    function shallowEquals(objA, objB) {
      if (objA === objB) {
        return true;
      }

      if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
        return false;
      }

      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      } // Test for A's keys different from B.


      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

      for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
          return false;
        }
      }

      return true;
    }
    function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
      var props = _ref2.props,
          state = _ref2.state;
      return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state);
    }
    function createError(message, exception) {
      var eMsg = exception ? "\n".concat(exception) : '';
      return "[React Intl] ".concat(message).concat(eMsg);
    }
    function defaultErrorHandler(error) {
      {
        console.error(error);
      }
    }

    function getDisplayName(Component) {
      return Component.displayName || Component.name || 'Component';
    }

    var IntlContext = createContext(null);
    var IntlConsumer = IntlContext.Consumer,
        IntlProvider = IntlContext.Provider;
    var Provider = IntlProvider;
    function withIntl(WrappedComponent) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$intlPropName = options.intlPropName,
          intlPropName = _options$intlPropName === void 0 ? 'intl' : _options$intlPropName,
          _options$withRef = options.withRef,
          withRef = _options$withRef === void 0 ? false : _options$withRef,
          _options$enforceConte = options.enforceContext,
          enforceContext = _options$enforceConte === void 0 ? true : _options$enforceConte;

      var withIntl =
      /*#__PURE__*/
      function (_Component) {
        _inherits(withIntl, _Component);

        function withIntl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, withIntl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(withIntl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _defineProperty(_assertThisInitialized(_this), "wrappedInstance", function (ref) {
            _this.wrappedInstance.current = ref;
          });

          return _this;
        }

        _createClass(withIntl, [{
          key: "getWrappedInstance",
          value: function getWrappedInstance() {
            invariant_1(withRef, '[React Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`withIntl()`');
            return this.wrappedInstance.current;
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;

            return React__default.createElement(IntlConsumer, null, function (intl) {
              if (enforceContext) {
                invariantIntlContext({
                  intl: intl
                });
              }

              return React__default.createElement(WrappedComponent, _extends({}, _objectSpread({}, _this2.props, _defineProperty({}, intlPropName, intl)), {
                ref: withRef ? _this2.wrappedInstance : null
              }));
            });
          }
        }]);

        return withIntl;
      }(React.Component);

      _defineProperty(withIntl, "displayName", "withIntl(".concat(getDisplayName(WrappedComponent), ")"));

      _defineProperty(withIntl, "WrappedComponent", WrappedComponent);

      return hoistNonReactStatics_cjs(withIntl, WrappedComponent);
    }

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    function componentWillMount() {
      // Call this.constructor.gDSFP to support sub-classes.
      var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

      if (state !== null && state !== undefined) {
        this.setState(state);
      }
    }

    function componentWillReceiveProps(nextProps) {
      // Call this.constructor.gDSFP to support sub-classes.
      // Use the setState() updater to ensure state isn't stale in certain edge cases.
      function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
      } // Binding "this" is important for shallow renderer support.


      this.setState(updater.bind(this));
    }

    function componentWillUpdate(nextProps, nextState) {
      try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
      } finally {
        this.props = prevProps;
        this.state = prevState;
      }
    } // React may warn about cWM/cWRP/cWU methods being deprecated.
    // Add a flag to suppress these warnings for this special case.


    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;

    function polyfill(Component) {
      var prototype = Component.prototype;

      if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
      }

      if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
        return Component;
      } // If new component APIs are defined, "unsafe" lifecycles won't be called.
      // Error if any of these lifecycles are present,
      // Because they would work differently between older and newer (16.3+) versions of React.


      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;

      if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
      } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }

      if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }

      if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }

      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
      } // React <= 16.2 does not support static getDerivedStateFromProps.
      // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
      // Newer versions of React will ignore these lifecycles if gDSFP exists.


      if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
      } // React <= 16.2 does not support getSnapshotBeforeUpdate.
      // As a workaround, use cWU to invoke the new lifecycle.
      // Newer versions of React will ignore that lifecycle if gSBU exists.


      if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
          throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        }

        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;

        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
          // 16.3+ will not execute our will-update method;
          // It will pass a snapshot value to did-update though.
          // Older versions will require our polyfilled will-update value.
          // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
          // Because for <= 15.x versions this might be a "prevContext" object.
          // We also can't just check "__reactInternalSnapshot",
          // Because get-snapshot might return a falsy value.
          // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
          var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
          componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
      }

      return Component;
    }

    function resolveLocale(locales) {
      // IntlMessageFormat#_resolveLocale() does not depend on `this`.
      return MessageFormat.prototype._resolveLocale(locales);
    }

    function findPluralFunction(locale) {
      // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
      return MessageFormat.prototype._findPluralRuleFunction(locale);
    }

    var IntlPluralFormat = function IntlPluralFormat(locales) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, IntlPluralFormat);

      var useOrdinal = options.style === 'ordinal';
      var pluralFn = findPluralFunction(resolveLocale(locales));

      this.format = function (value) {
        return pluralFn(value, useOrdinal);
      };
    };

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    /* jslint esnext: true */
    // Function.prototype.bind implementation from Mozilla Developer Network:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill
    var bind = Function.prototype.bind || function (oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      if (this.prototype) {
        // native functions don't have a prototype
        fNOP.prototype = this.prototype;
      }

      fBound.prototype = new fNOP();
      return fBound;
    }; // Purposely using the same implementation as the Intl.js `Intl` polyfill.
    // Copyright 2013 Andy Earnshaw, MIT License


    var hop$2 = Object.prototype.hasOwnProperty;

    var realDefineProp$2 = function () {
      try {
        return !!Object.defineProperty({}, 'a', {});
      } catch (e) {
        return false;
      }
    }();
    var defineProperty$3 = realDefineProp$2 ? Object.defineProperty : function (obj, name, desc) {
      if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
      } else if (!hop$2.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
      }
    };

    var objCreate$2 = Object.create || function (proto, props) {
      var obj, k;

      function F() {}

      F.prototype = proto;
      obj = new F();

      for (k in props) {
        if (hop$2.call(props, k)) {
          defineProperty$3(obj, k, props[k]);
        }
      }

      return obj;
    };

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */

    function createFormatCache(FormatConstructor) {
      var cache = objCreate$2(null);
      return function () {
        var args = Array.prototype.slice.call(arguments);
        var cacheId = getCacheId(args);
        var format = cacheId && cache[cacheId];

        if (!format) {
          format = new (bind.apply(FormatConstructor, [null].concat(args)))();

          if (cacheId) {
            cache[cacheId] = format;
          }
        }

        return format;
      };
    } // -- Utilities ----------------------------------------------------------------


    function getCacheId(inputs) {
      // When JSON is not available in the runtime, we will not create a cache id.
      if (typeof JSON === 'undefined') {
        return;
      }

      var cacheId = [];
      var i, len, input;

      for (i = 0, len = inputs.length; i < len; i += 1) {
        input = inputs[i];

        if (input && typeof input === 'object') {
          cacheId.push(orderedProps(input));
        } else {
          cacheId.push(input);
        }
      }

      return JSON.stringify(cacheId);
    }

    function orderedProps(obj) {
      var props = [],
          keys = [];
      var key, i, len, prop;

      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          keys.push(key);
        }
      }

      var orderedKeys = keys.sort();

      for (i = 0, len = orderedKeys.length; i < len; i += 1) {
        key = orderedKeys[i];
        prop = {};
        prop[key] = obj[key];
        props[i] = prop;
      }

      return props;
    }

    var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
    var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
    var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
    var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);
    var RELATIVE_FORMAT_THRESHOLDS = {
      second: 60,
      // seconds to minute
      minute: 60,
      // minutes to hour
      hour: 24,
      // hours to day
      day: 30,
      // days to month
      month: 12 // months to year

    };

    function updateRelativeFormatThresholds(newThresholds) {
      var thresholds = RelativeFormat.thresholds;
      thresholds.second = newThresholds.second;
      thresholds.minute = newThresholds.minute;
      thresholds.hour = newThresholds.hour;
      thresholds.day = newThresholds.day;
      thresholds.month = newThresholds.month;
      thresholds['second-short'] = newThresholds['second-short'];
      thresholds['minute-short'] = newThresholds['minute-short'];
      thresholds['hour-short'] = newThresholds['hour-short'];
      thresholds['day-short'] = newThresholds['day-short'];
      thresholds['month-short'] = newThresholds['month-short'];
    }

    function getNamedFormat(formats, type, name, onError) {
      var format = formats && formats[type] && formats[type][name];

      if (format) {
        return format;
      }

      onError(createError("No ".concat(type, " format named: ").concat(name)));
    }

    function formatDate(config, state, value) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var locale = config.locale,
          formats = config.formats,
          timeZone = config.timeZone;
      var format = options.format;
      var onError = config.onError || defaultErrorHandler;
      var date = new Date(value);

      var defaults = _objectSpread({}, timeZone && {
        timeZone: timeZone
      }, format && getNamedFormat(formats, 'date', format, onError));

      var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

      try {
        return state.getDateTimeFormat(locale, filteredOptions).format(date);
      } catch (e) {
        onError(createError('Error formatting date.', e));
      }

      return String(date);
    }
    function formatTime(config, state, value) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var locale = config.locale,
          formats = config.formats,
          timeZone = config.timeZone;
      var format = options.format;
      var onError = config.onError || defaultErrorHandler;
      var date = new Date(value);

      var defaults = _objectSpread({}, timeZone && {
        timeZone: timeZone
      }, format && getNamedFormat(formats, 'time', format, onError));

      var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

      if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
        // Add default formatting options if hour, minute, or second isn't defined.
        filteredOptions = _objectSpread({}, filteredOptions, {
          hour: 'numeric',
          minute: 'numeric'
        });
      }

      try {
        return state.getDateTimeFormat(locale, filteredOptions).format(date);
      } catch (e) {
        onError(createError('Error formatting time.', e));
      }

      return String(date);
    }
    function formatRelative(config, state, value) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var locale = config.locale,
          formats = config.formats;
      var format = options.format;
      var onError = config.onError || defaultErrorHandler;
      var date = new Date(value);
      var now = new Date(options.now);
      var defaults = format && getNamedFormat(formats, 'relative', format, onError);
      var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults); // Capture the current threshold values, then temporarily override them with
      // specific values just for this render.

      var oldThresholds = _objectSpread({}, RelativeFormat.thresholds);

      updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);

      try {
        return state.getRelativeFormat(locale, filteredOptions).format(date, {
          now: isFinite(now) ? now : state.now()
        });
      } catch (e) {
        onError(createError('Error formatting relative time.', e));
      } finally {
        updateRelativeFormatThresholds(oldThresholds);
      }

      return String(date);
    }
    function formatNumber(config, state, value) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var locale = config.locale,
          formats = config.formats;
      var format = options.format;
      var onError = config.onError || defaultErrorHandler;
      var defaults = format && getNamedFormat(formats, 'number', format, onError);
      var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);

      try {
        return state.getNumberFormat(locale, filteredOptions).format(value);
      } catch (e) {
        onError(createError('Error formatting number.', e));
      }

      return String(value);
    }
    function formatPlural(config, state, value) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var locale = config.locale;
      var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
      var onError = config.onError || defaultErrorHandler;

      try {
        return state.getPluralFormat(locale, filteredOptions).format(value);
      } catch (e) {
        onError(createError('Error formatting plural.', e));
      }

      return 'other';
    }
    function formatMessage(config, state) {
      var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var locale = config.locale,
          formats = config.formats,
          messages = config.messages,
          defaultLocale = config.defaultLocale,
          defaultFormats = config.defaultFormats;
      var id = messageDescriptor.id,
          defaultMessage = messageDescriptor.defaultMessage; // Produce a better error if the user calls `intl.formatMessage(element)`

      {
        invariant_1(!React.isValidElement(config), '[React Intl] Don\'t pass React elements to ' + 'formatMessage(), pass `.props`.');
      } // `id` is a required field of a Message Descriptor.


      invariant_1(id, '[React Intl] An `id` must be provided to format a message.');
      var message = messages && messages[id];
      var hasValues = Object.keys(values).length > 0; // Avoid expensive message formatting for simple messages without values. In
      // development messages will always be formatted in case of missing values.

      if (!hasValues && "development" === 'production') {
        return message || defaultMessage || id;
      }

      var formattedMessage;
      var onError = config.onError || defaultErrorHandler;

      if (message) {
        try {
          var formatter = state.getMessageFormat(message, locale, formats);
          formattedMessage = formatter.format(values);
        } catch (e) {
          onError(createError("Error formatting message: \"".concat(id, "\" for locale: \"").concat(locale, "\"") + (defaultMessage ? ', using default message as fallback.' : ''), e));
        }
      } else {
        // This prevents warnings from littering the console in development
        // when no `messages` are passed into the <IntlProvider> for the
        // default locale, and a default message is in the source.
        if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
          onError(createError("Missing message: \"".concat(id, "\" for locale: \"").concat(locale, "\"") + (defaultMessage ? ', using default message as fallback.' : '')));
        }
      }

      if (!formattedMessage && defaultMessage) {
        try {
          var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

          formattedMessage = _formatter.format(values);
        } catch (e) {
          onError(createError("Error formatting the default message for: \"".concat(id, "\""), e));
        }
      }

      if (!formattedMessage) {
        onError(createError("Cannot format message: \"".concat(id, "\", ") + "using message ".concat(message || defaultMessage ? 'source' : 'id', " as fallback.")));
      }

      return formattedMessage || message || defaultMessage || id;
    }
    function formatHTMLMessage(config, state, messageDescriptor) {
      var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      // Process all the values before they are used when formatting the ICU
      // Message string. Since the formatted message might be injected via
      // `innerHTML`, all String-based values need to be HTML-escaped.
      var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
        var value = rawValues[name];
        escaped[name] = typeof value === 'string' ? escape(value) : value;
        return escaped;
      }, {});
      return formatMessage(config, state, messageDescriptor, escapedValues);
    }

    var format = /*#__PURE__*/Object.freeze({
        formatDate: formatDate,
        formatTime: formatTime,
        formatRelative: formatRelative,
        formatNumber: formatNumber,
        formatPlural: formatPlural,
        formatMessage: formatMessage,
        formatHTMLMessage: formatHTMLMessage
    });

    var intlConfigPropNames = Object.keys(intlConfigPropTypes);
    var intlFormatPropNames = Object.keys(intlFormatPropTypes); // These are not a static property on the `IntlProvider` class so the intl
    // config values can be inherited from an <IntlProvider> ancestor.

    var defaultProps = {
      formats: {},
      messages: {},
      timeZone: null,
      textComponent: 'span',
      defaultLocale: 'en',
      defaultFormats: {},
      onError: defaultErrorHandler
    };

    function getConfig(filteredProps) {
      var config = _objectSpread({}, filteredProps); // Apply default props. This must be applied last after the props have
      // been resolved and inherited from any <IntlProvider> in the ancestry.
      // This matches how React resolves `defaultProps`.


      for (var propName in defaultProps) {
        if (config[propName] === undefined) {
          config[propName] = defaultProps[propName];
        }
      }

      if (!hasLocaleData(config.locale)) {
        var _config = config,
            locale = _config.locale,
            defaultLocale = _config.defaultLocale,
            defaultFormats = _config.defaultFormats,
            onError = _config.onError;
        onError(createError("Missing locale data for locale: \"".concat(locale, "\". ") + "Using default locale: \"".concat(defaultLocale, "\" as fallback."))); // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.

        config = _objectSpread({}, config, {
          locale: defaultLocale,
          formats: defaultFormats,
          messages: defaultProps.messages
        });
      }

      return config;
    }

    function getBoundFormatFns(config, state) {
      var formatterState = _objectSpread({}, state.context.formatters, {
        now: state.context.now
      });

      return intlFormatPropNames.reduce(function (boundFormatFns, name) {
        boundFormatFns[name] = format[name].bind(null, config, formatterState);
        return boundFormatFns;
      }, {});
    }

    var IntlProvider$1 =
    /*#__PURE__*/
    function (_Component) {
      _inherits(IntlProvider, _Component);

      function IntlProvider(props) {
        var _this;

        _classCallCheck(this, IntlProvider);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(IntlProvider).call(this, props));
        invariant_1(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');
        var intlContext = props.intl; // Used to stabilize time when performing an initial rendering so that
        // all relative times use the same reference "now" time.

        var initialNow;

        if (isFinite(props.initialNow)) {
          initialNow = Number(props.initialNow);
        } else {
          // When an `initialNow` isn't provided via `props`, look to see an
          // <IntlProvider> exists in the ancestry and call its `now()`
          // function to propagate its value for "now".
          initialNow = intlContext ? intlContext.now() : Date.now();
        } // Creating `Intl*` formatters is expensive. If there's a parent
        // `<IntlProvider>`, then its formatters will be used. Otherwise, this
        // memoize the `Intl*` constructors and cache them for the lifecycle of
        // this IntlProvider instance.


        var _ref = intlContext || {},
            _ref$formatters = _ref.formatters,
            formatters = _ref$formatters === void 0 ? {
          getDateTimeFormat: createFormatCache(Intl.DateTimeFormat),
          getNumberFormat: createFormatCache(Intl.NumberFormat),
          getMessageFormat: createFormatCache(MessageFormat),
          getRelativeFormat: createFormatCache(RelativeFormat),
          getPluralFormat: createFormatCache(IntlPluralFormat)
        } : _ref$formatters;

        _this.state = {
          context: {
            formatters: formatters,
            // Wrapper to provide stable "now" time for initial render.
            now: function now() {
              return _this._didDisplay ? Date.now() : initialNow;
            }
          }
        };
        return _this;
      }

      _createClass(IntlProvider, [{
        key: "getContext",
        value: function getContext() {
          return this.state.context;
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          for (var _len = arguments.length, next = new Array(_len), _key = 0; _key < _len; _key++) {
            next[_key] = arguments[_key];
          }

          return shouldIntlComponentUpdate.apply(void 0, [this].concat(next));
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this._didDisplay = true;
        }
      }, {
        key: "render",
        value: function render() {
          return React__default.createElement(Provider, {
            value: this.getContext()
          }, React.Children.only(this.props.children));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
          var intlContext = nextProps.intl; // Build a whitelisted config object from `props`, defaults, and
          // `props.intl`, if an <IntlProvider> exists in the ancestry.

          var filteredProps = filterProps(nextProps, intlConfigPropNames, intlContext || {});

          if (!shallowEquals(filteredProps, prevState.filteredProps)) {
            var config = getConfig(filteredProps);
            var boundFormatFns = getBoundFormatFns(config, prevState);
            return {
              filteredProps: filteredProps,
              context: _objectSpread({}, prevState.context, config, boundFormatFns)
            };
          }

          return null;
        }
      }]);

      return IntlProvider;
    }(React.Component);

    _defineProperty(IntlProvider$1, "displayName", 'IntlProvider');

    IntlProvider$1.propTypes = _objectSpread({}, intlConfigPropTypes, {
      children: PropTypes.element.isRequired,
      initialNow: PropTypes.any
    });
    polyfill(IntlProvider$1);
    var provider = withIntl(IntlProvider$1, {
      enforceContext: false
    }); // to be able to inherit values from parent providers

    var FormattedDate =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FormattedDate, _Component);

      function FormattedDate(props) {
        var _this;

        _classCallCheck(this, FormattedDate);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedDate).call(this, props));
        invariantIntlContext(props);
        return _this;
      }

      _createClass(FormattedDate, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return shouldIntlComponentUpdate(this, nextProps, nextState);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props$intl = this.props.intl,
              formatDate = _this$props$intl.formatDate,
              Text = _this$props$intl.textComponent;
          var _this$props = this.props,
              value = _this$props.value,
              children = _this$props.children;
          var formattedDate = formatDate(value, this.props);

          if (typeof children === 'function') {
            return children(formattedDate);
          }

          return React__default.createElement(Text, null, formattedDate);
        }
      }]);

      return FormattedDate;
    }(React.Component);

    _defineProperty(FormattedDate, "displayName", 'FormattedDate');

    FormattedDate.propTypes = _objectSpread({}, dateTimeFormatPropTypes, {
      intl: intlShape,
      value: PropTypes.any.isRequired,
      format: PropTypes.string,
      children: PropTypes.func
    });
    var date = withIntl(FormattedDate);

    var FormattedTime =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FormattedTime, _Component);

      function FormattedTime(props) {
        var _this;

        _classCallCheck(this, FormattedTime);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedTime).call(this, props));
        invariantIntlContext(props);
        return _this;
      }

      _createClass(FormattedTime, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return shouldIntlComponentUpdate(this, nextProps, nextState);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props$intl = this.props.intl,
              formatTime = _this$props$intl.formatTime,
              Text = _this$props$intl.textComponent;
          var _this$props = this.props,
              value = _this$props.value,
              children = _this$props.children;
          var formattedTime = formatTime(value, this.props);

          if (typeof children === 'function') {
            return children(formattedTime);
          }

          return React__default.createElement(Text, null, formattedTime);
        }
      }]);

      return FormattedTime;
    }(React.Component);

    _defineProperty(FormattedTime, "displayName", 'FormattedTime');

    FormattedTime.propTypes = _objectSpread({}, dateTimeFormatPropTypes, {
      intl: intlShape,
      value: PropTypes.any.isRequired,
      format: PropTypes.string,
      children: PropTypes.func
    });
    var time = withIntl(FormattedTime);

    var SECOND = 1000;
    var MINUTE = 1000 * 60;
    var HOUR = 1000 * 60 * 60;
    var DAY = 1000 * 60 * 60 * 24; // The maximum timer delay value is a 32-bit signed integer.
    // See: https://mdn.io/setTimeout

    var MAX_TIMER_DELAY = 2147483647;

    function selectUnits(delta) {
      var absDelta = Math.abs(delta);

      if (absDelta < MINUTE) {
        return 'second';
      }

      if (absDelta < HOUR) {
        return 'minute';
      }

      if (absDelta < DAY) {
        return 'hour';
      } // The maximum scheduled delay will be measured in days since the maximum
      // timer delay is less than the number of milliseconds in 25 days.


      return 'day';
    }

    function getUnitDelay(units) {
      switch (units) {
        case 'second':
          return SECOND;

        case 'minute':
          return MINUTE;

        case 'hour':
          return HOUR;

        case 'day':
          return DAY;

        default:
          return MAX_TIMER_DELAY;
      }
    }

    function isSameDate(a, b) {
      if (a === b) {
        return true;
      }

      var aTime = new Date(a).getTime();
      var bTime = new Date(b).getTime();
      return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
    }

    var FormattedRelative =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FormattedRelative, _Component);

      function FormattedRelative(props) {
        var _this;

        _classCallCheck(this, FormattedRelative);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedRelative).call(this, props));
        invariantIntlContext(props);
        var now = isFinite(props.initialNow) ? Number(props.initialNow) : props.intl.now(); // `now` is stored as state so that `render()` remains a function of
        // props + state, instead of accessing `Date.now()` inside `render()`.

        _this.state = {
          now: now
        };
        return _this;
      }

      _createClass(FormattedRelative, [{
        key: "scheduleNextUpdate",
        value: function scheduleNextUpdate(props, state) {
          var _this2 = this;

          // Cancel and pending update because we're scheduling a new update.
          clearTimeout(this._timer);
          var value = props.value,
              units = props.units,
              updateInterval = props.updateInterval;
          var time = new Date(value).getTime(); // If the `updateInterval` is falsy, including `0` or we don't have a
          // valid date, then auto updates have been turned off, so we bail and
          // skip scheduling an update.

          if (!updateInterval || !isFinite(time)) {
            return;
          }

          var delta = time - state.now;
          var unitDelay = getUnitDelay(units || selectUnits(delta));
          var unitRemainder = Math.abs(delta % unitDelay); // We want the largest possible timer delay which will still display
          // accurate information while reducing unnecessary re-renders. The delay
          // should be until the next "interesting" moment, like a tick from
          // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.

          var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);
          this._timer = setTimeout(function () {
            _this2.setState({
              now: _this2.props.intl.now()
            });
          }, delay);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.scheduleNextUpdate(this.props, this.state);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(_ref) {
          var nextValue = _ref.value;

          // When the `props.value` date changes, `state.now` needs to be updated,
          // and the next update can be rescheduled.
          if (!isSameDate(nextValue, this.props.value)) {
            this.setState({
              now: this.props.intl.now()
            });
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          for (var _len = arguments.length, next = new Array(_len), _key = 0; _key < _len; _key++) {
            next[_key] = arguments[_key];
          }

          return shouldIntlComponentUpdate.apply(void 0, [this].concat(next));
        }
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {
          this.scheduleNextUpdate(nextProps, nextState);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this._timer);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props$intl = this.props.intl,
              formatRelative = _this$props$intl.formatRelative,
              Text = _this$props$intl.textComponent;
          var _this$props = this.props,
              value = _this$props.value,
              children = _this$props.children;
          var formattedRelative = formatRelative(value, _objectSpread({}, this.props, this.state));

          if (typeof children === 'function') {
            return children(formattedRelative);
          }

          return React__default.createElement(Text, null, formattedRelative);
        }
      }]);

      return FormattedRelative;
    }(React.Component);

    _defineProperty(FormattedRelative, "displayName", 'FormattedRelative');

    _defineProperty(FormattedRelative, "defaultProps", {
      updateInterval: 1000 * 10
    });

    FormattedRelative.propTypes = _objectSpread({}, relativeFormatPropTypes, {
      intl: intlShape,
      value: PropTypes.any.isRequired,
      format: PropTypes.string,
      updateInterval: PropTypes.number,
      initialNow: PropTypes.any,
      children: PropTypes.func
    });
    var relative = withIntl(FormattedRelative);

    var FormattedNumber =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FormattedNumber, _Component);

      function FormattedNumber(props) {
        var _this;

        _classCallCheck(this, FormattedNumber);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedNumber).call(this, props));
        invariantIntlContext(props);
        return _this;
      }

      _createClass(FormattedNumber, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return shouldIntlComponentUpdate(this, nextProps, nextState);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props$intl = this.props.intl,
              formatNumber = _this$props$intl.formatNumber,
              Text = _this$props$intl.textComponent;
          var _this$props = this.props,
              value = _this$props.value,
              children = _this$props.children;
          var formattedNumber = formatNumber(value, this.props);

          if (typeof children === 'function') {
            return children(formattedNumber);
          }

          return React__default.createElement(Text, null, formattedNumber);
        }
      }]);

      return FormattedNumber;
    }(React.Component);

    _defineProperty(FormattedNumber, "displayName", 'FormattedNumber');

    FormattedNumber.propTypes = _objectSpread({}, numberFormatPropTypes, {
      intl: intlShape,
      value: PropTypes.any.isRequired,
      format: PropTypes.string,
      children: PropTypes.func
    });
    var number$1 = withIntl(FormattedNumber);

    var FormattedPlural =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FormattedPlural, _Component);

      function FormattedPlural(props) {
        var _this;

        _classCallCheck(this, FormattedPlural);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedPlural).call(this, props));
        invariantIntlContext(props);
        return _this;
      }

      _createClass(FormattedPlural, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return shouldIntlComponentUpdate(this, nextProps, nextState);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props$intl = this.props.intl,
              formatPlural = _this$props$intl.formatPlural,
              Text = _this$props$intl.textComponent;
          var _this$props = this.props,
              value = _this$props.value,
              other = _this$props.other,
              children = _this$props.children;
          var pluralCategory = formatPlural(value, this.props);
          var formattedPlural = this.props[pluralCategory] || other;

          if (typeof children === 'function') {
            return children(formattedPlural);
          }

          return React__default.createElement(Text, null, formattedPlural);
        }
      }]);

      return FormattedPlural;
    }(React.Component);

    _defineProperty(FormattedPlural, "displayName", 'FormattedPlural');

    _defineProperty(FormattedPlural, "defaultProps", {
      style: 'cardinal'
    });

    FormattedPlural.propTypes = _objectSpread({}, pluralFormatPropTypes, {
      intl: intlShape,
      value: PropTypes.any.isRequired,
      other: PropTypes.node.isRequired,
      zero: PropTypes.node,
      one: PropTypes.node,
      two: PropTypes.node,
      few: PropTypes.node,
      many: PropTypes.node,
      children: PropTypes.func
    });
    var plural = withIntl(FormattedPlural);

    var defaultFormatMessage = function defaultFormatMessage(descriptor, values) {
      {
        console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
      }

      return formatMessage({}, {
        getMessageFormat: createFormatCache(MessageFormat)
      }, descriptor, values);
    };

    var FormattedMessage =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FormattedMessage, _Component);

      function FormattedMessage(props) {
        var _this;

        _classCallCheck(this, FormattedMessage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedMessage).call(this, props));

        if (!props.defaultMessage) {
          invariantIntlContext(props);
        }

        return _this;
      }

      _createClass(FormattedMessage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          var values = this.props.values;
          var nextValues = nextProps.values;

          if (!shallowEquals(nextValues, values)) {
            return true;
          } // Since `values` has already been checked, we know they're not
          // different, so the current `values` are carried over so the shallow
          // equals comparison on the other props isn't affected by the `values`.


          var nextPropsToCheck = _objectSpread({}, nextProps, {
            values: values
          });

          return shouldIntlComponentUpdate(this, nextPropsToCheck, nextState);
        }
      }, {
        key: "render",
        value: function render() {
          var _ref = this.props.intl || {},
              _ref$formatMessage = _ref.formatMessage,
              formatMessage$$1 = _ref$formatMessage === void 0 ? defaultFormatMessage : _ref$formatMessage,
              _ref$textComponent = _ref.textComponent,
              Text = _ref$textComponent === void 0 ? 'span' : _ref$textComponent;

          var _this$props = this.props,
              id = _this$props.id,
              description = _this$props.description,
              defaultMessage = _this$props.defaultMessage,
              values = _this$props.values,
              _this$props$tagName = _this$props.tagName,
              Component = _this$props$tagName === void 0 ? Text : _this$props$tagName,
              children = _this$props.children;
          var tokenDelimiter;
          var tokenizedValues;
          var elements;
          var hasValues = values && Object.keys(values).length > 0;

          if (hasValues) {
            // Creates a token with a random UID that should not be guessable or
            // conflict with other parts of the `message` string.
            var uid = Math.floor(Math.random() * 0x10000000000).toString(16);

            var generateToken = function () {
              var counter = 0;
              return function () {
                return "ELEMENT-".concat(uid, "-").concat(counter += 1);
              };
            }(); // Splitting with a delimiter to support IE8. When using a regex
            // with a capture group IE8 does not include the capture group in
            // the resulting array.


            tokenDelimiter = "@__".concat(uid, "__@");
            tokenizedValues = {};
            elements = {}; // Iterates over the `props` to keep track of any React Element
            // values so they can be represented by the `token` as a placeholder
            // when the `message` is formatted. This allows the formatted
            // message to then be broken-up into parts with references to the
            // React Elements inserted back in.

            Object.keys(values).forEach(function (name) {
              var value = values[name];

              if (React.isValidElement(value)) {
                var token = generateToken();
                tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
                elements[token] = value;
              } else {
                tokenizedValues[name] = value;
              }
            });
          }

          var descriptor = {
            id: id,
            description: description,
            defaultMessage: defaultMessage
          };
          var formattedMessage = formatMessage$$1(descriptor, tokenizedValues || values);
          var nodes;
          var hasElements = elements && Object.keys(elements).length > 0;

          if (hasElements) {
            // Split the message into parts so the React Element values captured
            // above can be inserted back into the rendered message. This
            // approach allows messages to render with React Elements while
            // keeping React's virtual diffing working properly.
            nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
              return !!part;
            }).map(function (part) {
              return elements[part] || part;
            });
          } else {
            nodes = [formattedMessage];
          }

          if (typeof children === 'function') {
            return children.apply(void 0, _toConsumableArray(nodes));
          } // Needs to use `createElement()` instead of JSX, otherwise React will
          // warn about a missing `key` prop with rich-text message formatting.


          return React.createElement.apply(void 0, [Component, null].concat(_toConsumableArray(nodes)));
        }
      }]);

      return FormattedMessage;
    }(React.Component);

    _defineProperty(FormattedMessage, "displayName", 'FormattedMessage');

    _defineProperty(FormattedMessage, "defaultProps", {
      values: {}
    });

    FormattedMessage.propTypes = _objectSpread({}, messageDescriptorPropTypes, {
      intl: intlShape,
      values: PropTypes.object,
      tagName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      children: PropTypes.func
    });
    var BaseFormattedMessage = FormattedMessage;
    var message = withIntl(FormattedMessage);

    var FormattedHTMLMessage =
    /*#__PURE__*/
    function (_BaseFormattedMessage) {
      _inherits(FormattedHTMLMessage, _BaseFormattedMessage);

      function FormattedHTMLMessage() {
        _classCallCheck(this, FormattedHTMLMessage);

        return _possibleConstructorReturn(this, _getPrototypeOf(FormattedHTMLMessage).apply(this, arguments));
      }

      _createClass(FormattedHTMLMessage, [{
        key: "render",
        value: function render() {
          var _this$props$intl = this.props.intl,
              formatHTMLMessage = _this$props$intl.formatHTMLMessage,
              Text = _this$props$intl.textComponent;
          var _this$props = this.props,
              id = _this$props.id,
              description = _this$props.description,
              defaultMessage = _this$props.defaultMessage,
              rawValues = _this$props.values,
              _this$props$tagName = _this$props.tagName,
              Component = _this$props$tagName === void 0 ? Text : _this$props$tagName,
              children = _this$props.children;
          var descriptor = {
            id: id,
            description: description,
            defaultMessage: defaultMessage
          };
          var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

          if (typeof children === 'function') {
            return children(formattedHTMLMessage);
          } // Since the message presumably has HTML in it, we need to set
          // `innerHTML` in order for it to be rendered and not escaped by React.
          // To be safe, all string prop values were escaped when formatting the
          // message. It is assumed that the message is not UGC, and came from the
          // developer making it more like a template.
          //
          // Note: There's a perf impact of using this component since there's no
          // way for React to do its virtual DOM diffing.


          var html = {
            __html: formattedHTMLMessage
          };
          return React__default.createElement(Component, {
            dangerouslySetInnerHTML: html
          });
        }
      }]);

      return FormattedHTMLMessage;
    }(BaseFormattedMessage);

    _defineProperty(FormattedHTMLMessage, "displayName", 'FormattedHTMLMessage');

    var htmlMessage = withIntl(FormattedHTMLMessage);

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */
    addLocaleData(defaultLocaleData);

    exports.addLocaleData = addLocaleData;
    exports.intlShape = intlShape;
    exports.defineMessages = defineMessages;
    exports.injectIntl = withIntl;
    exports.IntlProvider = provider;
    exports.FormattedDate = date;
    exports.FormattedTime = time;
    exports.FormattedRelative = relative;
    exports.FormattedNumber = number$1;
    exports.FormattedPlural = plural;
    exports.FormattedMessage = message;
    exports.FormattedHTMLMessage = htmlMessage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-intl.js.map
