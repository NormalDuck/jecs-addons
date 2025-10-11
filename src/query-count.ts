import type { Query, Id } from "@rbxts/jecs";

// Counts all entities matched by a Query by summing entities across archetypes
export = function(query: Query<Id[]>): number {
  let count = 0;
  // Archetypes iterator yields [key, archetype]; we only need archetype
  for (const archetype of query.archetypes()) {
    count += archetype.entities.size();
  }
  return count;
}