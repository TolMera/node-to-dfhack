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
    red: number; /* red */
    green: number; /* green */
    blue: number; /* blue */
}

/**
 * Layer information for an embark tile.
 */
export interface EmbarkTileLayer {
    matTypeTable?: BasicMaterial[]; /* mat_type_table */
    matSubtypeTable?: number[]; /* mat_subtype_table */
    tileShapeTable?: BasicShape[]; /* tile_shape_table */
    tileColorTable?: ColorDefinition[]; /* tile_color_table */
}

/**
 * Representation of an embark tile.
 */
export interface EmbarkTile {
    worldX: number; /* world_x */
    worldY: number; /* world_y */
    worldZ: number; /* world_z */
    tileLayer?: EmbarkTileLayer[]; /* tile_layer */
    currentYear?: number; /* current_year */
    currentSeason?: number; /* current_season */
    isValid?: boolean; /* is_valid */
}

/**
 * Request for tile information.
 */
export interface TileRequest {
    wantX?: number; /* want_x */
    wantY?: number; /* want_y */
}

/**
 * Request for map information.
 */
export interface MapRequest {
    saveFolder?: string; /* save_folder */
}

/**
 * Reply for map information.
 */
export interface MapReply {
    available: boolean; /* available */
    regionX?: number; /* region_x */
    regionY?: number; /* region_y */
    regionSizeX?: number; /* region_size_x */
    regionSizeY?: number; /* region_size_y */
    currentYear?: number; /* current_year */
    currentSeason?: number; /* current_season */
}

/**
 * Raw names retrieved from a map.
 */
export interface RawNames {
    available: boolean; /* available */
    inorganic?: string[]; /* inorganic */
    organic?: string[]; /* organic */
}
