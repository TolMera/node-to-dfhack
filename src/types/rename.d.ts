// TypeScript type definitions for dfproto rename plugin

/** Input for renaming a squad */
export interface RenameSquadIn {
    squad_id: number; // Required field
    nickname?: string; // Optional field
    alias?: string; // Optional field
}

/** Input for renaming a unit */
export interface RenameUnitIn {
    unit_id: number; // Required field
    nickname?: string; // Optional field
    profession?: string; // Optional field
}

/** Input for renaming a building */
export interface RenameBuildingIn {
    building_id: number; // Required field
    name?: string; // Optional field
}
