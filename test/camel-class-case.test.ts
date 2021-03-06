import camelCase from 'lodash/camelCase'
import kebabCase from 'lodash/kebabCase'
import lowerCase from 'lodash/lowerCase'
import snakeCase from 'lodash/snakeCase'
import upperCase from 'lodash/upperCase'
import { camelClassCase } from '../src/camel-class-case'
import { returns } from '../src/returns'
import { titleCase } from '../src/title-case'

const expected = `CamelCaseClass`

for (const str of returns([camelCase, kebabCase, lowerCase, snakeCase, upperCase, titleCase], expected))
  test(`${str} should be converted to ${expected}`, () => expect(camelClassCase(str)).toBe(expected))