/**
 * TypeScript type definitions for isoworldremote.
 */

/**
 * Enumeration for basic materials.
 */
export enum BasicMaterial {
    AIR = 0,
    OTHER = 1,
    INORGANIC = 2,
    LIQUID = 3,
    PLANT = 4,
    WOOD = 5,
}

/**
 * Enumeration for liquid types.
 */
export enum LiquidType {
    ICE = 0,
    WATER = 1,
    MAGMA = 2,
}

/**
 * Enumeration for basic shapes.
 */
export enum BasicShape {
    NONE = 0,
    OPEN = 1,
    WALL = 3,
    FLOOR = 4,
    RAMP_UP = 5,
    RAMP_DOWN = 6,
}

/**
 * Definition of a color.
 */
export interface ColorDefinition {
    red: number;
    green: number;
    blue: number;
}

/**
 * Layer information for an embark tile.
 */
export interface EmbarkTileLayer {
    mat_type_table?: BasicMaterial[];
    mat_subtype_table?: number[];
    tile_shape_table?: BasicShape[];
    tile_color_table?: ColorDefinition[];
}

/**
 * Representation of an embark tile.
 */
export interface EmbarkTile {
    world_x: number;
    world_y: number;
    world_z: number;
    tile_layer?: EmbarkTileLayer[];
    current_year?: number;
    current_season?: number;
    is_valid?: boolean;
}

/**
 * Request for tile information.
 */
export interface TileRequest {
    want_x?: number;
    want_y?: number;
}

/**
 * Request for map information.
 */
export interface MapRequest {
    save_folder?: string;
}

/**
 * Reply for map information.
 */
export interface MapReply {
    available: boolean;
    region_x?: number;
    region_y?: number;
    region_size_x?: number;
    region_size_y?: number;
    current_year?: number;
    current_season?: number;
}

/**
 * Raw names retrieved from a map.
 */
export interface RawNames {
    available: boolean;
    inorganic?: string[];
    organic?: string[];
}
