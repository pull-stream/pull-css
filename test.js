var test = require('tape')
var pull = require('pull-stream')
var css = require('./')

test('parsing css', function (t) {
  pull(
    pull.values([
      'div { color: #000 }',
      '.test { display: flex; flex-direction: column-reverse }'
    ]),
    css(),
    pull.collect(function (end, values) {
      t.is(values[0].type, 'stylesheet', 'parsed as stylesheet')
      t.is(values[0].stylesheet.rules[0].selectors[0], 'div', 'correct selector')
      t.is(values[1].stylesheet.rules[0].declarations[1].value, 'column-reverse', 'correct values')
      t.end()
    })
  )
})

test('stringifying css', function (t) {
  pull(
    pull.values([
      'div { color: #000 }',
      '.test { color: red; font-weight: bold; }'
    ]),
    css(),
    css.stringify(),
    pull.collect(function (end, values) {
      t.same(values, [
        'div {\n  color: #000;\n}',
        '.test {\n  color: red;\n  font-weight: bold;\n}'
      ], 'values serialized')
      t.end()
    })
  )
})
