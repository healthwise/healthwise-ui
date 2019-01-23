/* global describe, it, expect */
import translation from './index'

const TestKey = '__TEST__DesiredBehavior'

describe('Translation', () => {
  it('returns correct translation for full localization', () => {
    const result = translation('en-us', TestKey)
    expect(result).toBe('Desired behavior')
  })

  it('returns correct translation for language only', () => {
    const result = translation('en', TestKey)
    expect(result).toBe('Desired behavior')
  })

  it('returns correct translation for full localization different form the default', () => {
    const result = translation('en-ca', TestKey)
    expect(result).toBe('Desired behaviour')
  })

  it('returns undefined message translation for unknown language', () => {
    const result = translation('zz', TestKey)
    expect(result).toBe(`  [${TestKey} not defined for zz]  `)
  })

  it('returns undefined message translation for unknown key', () => {
    const result = translation('fr-ca', 'KeepOnSteppin')
    expect(result).toBe('  [KeepOnSteppin not defined for fr-ca]  ')
  })

  it('returns undefined message translation for undefined key', () => {
    const result = translation('fr-ca')
    expect(result).toBe('  [undefined not defined for fr-ca]  ')
  })
})
