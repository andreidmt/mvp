import checkIsDeepEqual from "fast-deep-equal"

/**
 * Compare elements of two arrays using deep equality check
 *
 * @example
 * determineWhatChanged(
 *   [3, {foo: 'bar'}, {lorem: 'ipsum'}],
 *   [3, {foo: 'bar'}, {dolor: 'amet'}]
 * )
 * // => [true, true, false]
 */

type DetermineWhatChanged = (
  prev: any[],
  next: any[]
) => { prev: any[]; next: any[]; changed: boolean[] }

export const determineWhatChanged: DetermineWhatChanged = (
  prev = [],
  next = []
) => ({
  prev,
  next,
  changed: next.map((nextItem, index) =>
    checkIsDeepEqual(nextItem, prev[index])
  ),
})
