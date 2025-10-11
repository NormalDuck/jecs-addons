import type { Entity, Id, Query, Iter } from "@rbxts/jecs";

export type Observer<T extends unknown[]> = {
    disconnect: () => void,
};

export type Monitor<T extends unknown[]> = {
    disconnect: () => void;
    added: (callback: (entity: Entity) => void) => void;
    removed: (callback: (entity: Entity) => void) => void;
}

export declare function observer<T extends unknown[]>(query: Query<T>, callback?: (e: Entity) => void): Observer<T>;
export declare function monitor<T extends unknown[]>(query: Query<T>, callback?: (e: Entity) => void): Observer<T>;
