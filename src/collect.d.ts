type Signal<T extends unknown[]> = {
    Connect?: (callback: (...args: T) => void) => void;
    connect?: (callback: (...args: T) => void) => void;
};

declare function collect<T extends unknown[]>(
    event: Signal<T>,
): LuaTuple<[() => IterableFunction<LuaTuple<[number, ...T]>>, () => () => void]>;

export = collect;