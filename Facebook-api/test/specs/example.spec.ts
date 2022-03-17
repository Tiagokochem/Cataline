import test from 'japa'
import supertest from 'supertest'

test.group('Example', () => {
  test('assert sum', (assert) => {
    assert.equal(2 + 2, 4)
  })
})
