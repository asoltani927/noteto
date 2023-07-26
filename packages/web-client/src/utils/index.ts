export const isCallback = (
    maybeFunction: true | ((...args: any[]) => void),
  ): maybeFunction is (...args: any[]) => void =>
    typeof maybeFunction === 'function'