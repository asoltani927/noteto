import { isCallback } from '@/utils'
test('checking isCallback function output', async () => {
    expect(isCallback(function(){})).toBe(true)
  })