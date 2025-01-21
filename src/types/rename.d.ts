// TypeScript type definitions for dfproto rename plugin

/** Input for renaming a squad */
export interface RenameSquadIn {
    squadId: number; // Required field /* squad_id */
    nickname?: string; // Optional field /* nickname */
    alias?: string; // Optional field /* alias */
}

/** Input for renaming a unit */
export interface RenameUnitIn {
    unitId: number; // Required field /* unit_id */
    nickname?: string; // Optional field /* nickname */
    profession?: string; // Optional field /* profession */
}

/** Input for renaming a building */
export interface RenameBuildingIn {
    buildingId: number; // Required field /* building_id */
    name?: string; // Optional field /* name */
}
