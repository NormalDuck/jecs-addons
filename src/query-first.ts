import { Entity, Query } from "@rbxts/jecs";

export = function<T extends unknown[]>(query: Query<T>, predicate?: (entity: Entity, ...args: T) => boolean | undefined): (LuaTuple<[Entity, ...T]> | undefined) {
    const iter = query.iter();
    if (predicate) {
        while (true) {
            const values = iter();
            if (values[0] === undefined) break;
            if (predicate(...values as [Entity, ...T])) return values as LuaTuple<[Entity, ...T]>;
        }
        return undefined;
    }
    else {
        return iter();
    }
}