export async function asyncReduce<T, U>(
  array: T[],
  iteratee: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => Promise<U>,
  initialValue: U
): Promise<U> {
  return array.reduce(
    (promise, currentValue, currentIndex) =>
      promise.then((previousValue) => iteratee(previousValue, currentValue, currentIndex, array)),
    Promise.resolve(initialValue)
  );
}
