
export function is(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object] ${type}`;
}

export function isFunction(val:unknown) {
    return is(val,"Function")
}