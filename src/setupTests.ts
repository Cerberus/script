import { globalMock } from 'mock'

globalMock()

Date.now = jest.fn(() => 1587000000000)
Math.random = jest.fn(() => 0.5)
