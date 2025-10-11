import type { Entity } from "@rbxts/jecs";

type RefCallable = (key?: unknown, initer?: (entity: Entity) => void) => Entity;

type RefLibrary = {
  search(key: unknown): Entity | undefined;
  set(key: unknown, entity: Entity): void;
  unlist(key: unknown): void;
};

declare const ref: RefCallable & RefLibrary;
export = ref;
