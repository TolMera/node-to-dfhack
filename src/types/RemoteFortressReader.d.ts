// TypeScript Type Definitions for Dwarf Fortress Tiletypes and Materials

/** Enum for tile shapes */
export enum TiletypeShape {
    NO_SHAPE = -1,
    EMPTY = 0,
    FLOOR = 1,
    BOULDER = 2,
    PEBBLES = 3,
    WALL = 4,
    FORTIFICATION = 5,
    STAIR_UP = 6,
    STAIR_DOWN = 7,
    STAIR_UPDOWN = 8,
    RAMP = 9,
    RAMP_TOP = 10,
    BROOK_BED = 11,
    BROOK_TOP = 12,
    TREE_SHAPE = 13,
    SAPLING = 14,
    SHRUB = 15,
    ENDLESS_PIT = 16,
    BRANCH = 17,
    TRUNK_BRANCH = 18,
    TWIG = 19,
}

/** Enum for tile special properties */
export enum TiletypeSpecial {
    NO_SPECIAL = -1,
    NORMAL = 0,
    RIVER_SOURCE = 1,
    WATERFALL = 2,
    SMOOTH = 3,
    FURROWED = 4,
    WET = 5,
    DEAD = 6,
    WORN_1 = 7,
    WORN_2 = 8,
    WORN_3 = 9,
    TRACK = 10,
    SMOOTH_DEAD = 11,
}

/** Enum for tile materials */
export enum TiletypeMaterial {
    NO_MATERIAL = -1,
    AIR = 0,
    SOIL = 1,
    STONE = 2,
    FEATURE = 3,
    LAVA_STONE = 4,
    MINERAL = 5,
    FROZEN_LIQUID = 6,
    CONSTRUCTION = 7,
    GRASS_LIGHT = 8,
    GRASS_DARK = 9,
    GRASS_DRY = 10,
    GRASS_DEAD = 11,
    PLANT = 12,
    HFS = 13,
    CAMPFIRE = 14,
    FIRE = 15,
    ASHES = 16,
    MAGMA = 17,
    DRIFTWOOD = 18,
    POOL = 19,
    BROOK = 20,
    RIVER = 21,
    ROOT = 22,
    TREE_MATERIAL = 23,
    MUSHROOM = 24,
    UNDERWORLD_GATE = 25,
}

/** Enum for tile variants */
export enum TiletypeVariant {
    NO_VARIANT = -1,
    VAR_1 = 0,
    VAR_2 = 1,
    VAR_3 = 2,
    VAR_4 = 3,
}

/** Enum for world poles */
export enum WorldPoles {
    NO_POLES = 0,
    NORTH_POLE = 1,
    SOUTH_POLE = 2,
    BOTH_POLES = 3,
}

/** Enum for building directions */
export enum BuildingDirection {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3,
    NONE = 4,
}

/** Enum for tile dig designations */
export enum TileDigDesignation {
    NO_DIG = 0,
    DEFAULT_DIG = 1,
    UP_DOWN_STAIR_DIG = 2,
    CHANNEL_DIG = 3,
    RAMP_DIG = 4,
    DOWN_STAIR_DIG = 5,
    UP_STAIR_DIG = 6,
}

/** Enum for hair styles */
export enum HairStyle {
    UNKEMPT = -1,
    NEATLY_COMBED = 0,
    BRAIDED = 1,
    DOUBLE_BRAID = 2,
    PONY_TAILS = 3,
    CLEAN_SHAVEN = 4,
}

/** Enum for inventory modes */
export enum InventoryMode {
    Hauled = 0,
    Weapon = 1,
    Worn = 2,
    Piercing = 3,
    Flask = 4,
    WrappedAround = 5,
    StuckIn = 6,
    InMouth = 7,
    Pet = 8,
    SewnInto = 9,
    Strapped = 10,
}

/** Enum for armor layers */
export enum ArmorLayer {
    LAYER_UNDER = 0,
    LAYER_OVER = 1,
    LAYER_ARMOR = 2,
    LAYER_COVER = 3,
}

/** Representation of a coordinate */
export interface Coord {
    x?: number;
    y?: number;
    z?: number;
}

/** Representation of a tile type */
export interface Tiletype {
    id: number;
    name?: string;
    caption?: string;
    shape?: TiletypeShape;
    special?: TiletypeSpecial;
    material?: TiletypeMaterial;
    variant?: TiletypeVariant;
    direction?: string;
}

/** List of tile types */
export interface TiletypeList {
    tiletype_list: Tiletype[];
}

/** Representation of building extents */
export interface BuildingExtents {
    pos_x: number;
    pos_y: number;
    width: number;
    height: number;
    extents: number[];
}

/** Representation of a building item */
export interface BuildingItem {
    item?: Item;
    mode?: number;
}

/** Representation of a building instance */
export interface BuildingInstance {
    index: number;
    pos_x_min?: number;
    pos_y_min?: number;
    pos_z_min?: number;
    pos_x_max?: number;
    pos_y_max?: number;
    pos_z_max?: number;
    building_type?: BuildingType;
    material?: MatPair;
    building_flags?: number;
    is_room?: boolean;
    room?: BuildingExtents;
    direction?: BuildingDirection;
    items?: BuildingItem[];
    active?: number;
}

/** Representation of a river edge */
export interface RiverEdge {
    min_pos?: number;
    max_pos?: number;
    active?: number;
    elevation?: number;
}

/** Representation of a river tile */
export interface RiverTile {
    north?: RiverEdge;
    south?: RiverEdge;
    east?: RiverEdge;
    west?: RiverEdge;
}

/** Enum for matter states */
export enum MatterState {
    Solid = 0,
    Liquid = 1,
    Gas = 2,
    Powder = 3,
    Paste = 4,
    Pressed = 5,
}

/** Representation of spatter */
export interface Spatter {
    material?: MatPair;
    amount?: number;
    state?: MatterState;
    item?: MatPair;
}

/** Representation of a spatter pile */
export interface SpatterPile {
    spatters: Spatter[];
}

/** Representation of an item */
export interface Item {
    id?: number;
    pos?: Coord;
    flags1?: number;
    flags2?: number;
    type?: MatPair;
    material?: MatPair;
    dye?: ColorDefinition;
    stack_size?: number;
    subpos_x?: number;
    subpos_y?: number;
    subpos_z?: number;
    projectile?: boolean;
    velocity_x?: number;
    velocity_y?: number;
    velocity_z?: number;
    volume?: number;
    improvements?: ItemImprovement[];
    image?: ArtImage;
}

/** Representation of a plant tile */
export interface PlantTile {
    trunk?: boolean;
    connection_east?: boolean;
    connection_south?: boolean;
    connection_west?: boolean;
    connection_north?: boolean;
    branches?: boolean;
    twigs?: boolean;
    tile_type?: TiletypeSpecial;
}

/** Representation of tree information */
export interface TreeInfo {
    size?: Coord;
    tiles?: PlantTile[];
}

/** Representation of a plant instance */
export interface PlantInstance {
    plant_type?: number;
    pos?: Coord;
    tree_info?: TreeInfo;
}

/** Representation of a map block */
export interface MapBlock {
    map_x: number;
    map_y: number;
    map_z: number;
    tiles: number[];
    materials: MatPair[];
    layer_materials: MatPair[];
    vein_materials: MatPair[];
    base_materials: MatPair[];
    magma: number[];
    water: number[];
    hidden: boolean[];
    light: boolean[];
    subterranean: boolean[];
    outside: boolean[];
    aquifer: boolean[];
    water_stagnant: boolean[];
    water_salt: boolean[];
    construction_items: MatPair[];
    buildings: BuildingInstance[];
    tree_percent: number[];
    tree_x: number[];
    tree_y: number[];
    tree_z: number[];
    tile_dig_designation: TileDigDesignation[];
    spatterPile: SpatterPile[];
    items: Item[];
    tile_dig_designation_marker: boolean[];
    tile_dig_designation_auto: boolean[];
    grass_percent: number[];
    flows: FlowInfo[];
}

// TypeScript Type Definitions for Materials, Buildings, Units, and World Info

/** Material Pair */
export interface MatPair {
    mat_type: number;
    mat_index: number;
}

/** RGB Color Definition */
export interface ColorDefinition {
    red: number;
    green: number;
    blue: number;
}

/** Material Definition */
export interface MaterialDefinition {
    mat_pair: MatPair;
    id?: string;
    name?: string;
    state_color?: ColorDefinition;
    instrument?: InstrumentDef;
    up_step?: number;
    down_step?: number;
    layer?: ArmorLayer;
}

/** Building Type */
export interface BuildingType {
    building_type: number;
    building_subtype: number;
    building_custom: number;
}

/** Building Definition */
export interface BuildingDefinition {
    building_type: BuildingType;
    id?: string;
    name?: string;
}

/** Building List */
export interface BuildingList {
    building_list: BuildingDefinition[];
}

/** Material List */
export interface MaterialList {
    material_list: MaterialDefinition[];
}

/** Hair Definition */
export interface Hair {
    length?: number;
    style?: HairStyle;
}

/** Body Size Information */
export interface BodySizeInfo {
    size_cur?: number;
    size_base?: number;
    area_cur?: number;
    area_base?: number;
    length_cur?: number;
    length_base?: number;
}

/** Unit Appearance */
export interface UnitAppearance {
    body_modifiers: number[];
    bp_modifiers: number[];
    size_modifier?: number;
    colors: number[];
    hair?: Hair;
    beard?: Hair;
    moustache?: Hair;
    sideburns?: Hair;
    physical_description?: string;
}

/** Inventory Item */
export interface InventoryItem {
    mode?: InventoryMode;
    item?: Item;
    body_part_id?: number;
}

/** Wound Part */
export interface WoundPart {
    global_layer_idx?: number;
    body_part_id?: number;
    layer_idx?: number;
}

/** Unit Wound */
export interface UnitWound {
    parts: WoundPart[];
    severed_part?: boolean;
}

/** Unit Definition */
export interface UnitDefinition {
    id: number;
    isValid?: boolean;
    pos_x?: number;
    pos_y?: number;
    pos_z?: number;
    race?: MatPair;
    profession_color?: ColorDefinition;
    flags1?: number;
    flags2?: number;
    flags3?: number;
    is_soldier?: boolean;
    size_info?: BodySizeInfo;
    name?: string;
    blood_max?: number;
    blood_count?: number;
    appearance?: UnitAppearance;
    profession_id?: number;
    noble_positions: string[];
    rider_id?: number;
    inventory: InventoryItem[];
    subpos_x?: number;
    subpos_y?: number;
    subpos_z?: number;
    facing?: Coord;
    age?: number;
    wounds: UnitWound[];
}

/** Unit List */
export interface UnitList {
    creature_list: UnitDefinition[];
}

/** Block Request */
export interface BlockRequest {
    blocks_needed?: number;
    min_x?: number;
    max_x?: number;
    min_y?: number;
    max_y?: number;
    min_z?: number;
    max_z?: number;
}

/** Block List */
export interface BlockList {
    map_blocks: MapBlock[];
    map_x?: number;
    map_y?: number;
    engravings?: Engraving[];
    ocean_waves?: Wave[];
}

/** Plant Definition */
export interface PlantDef {
    pos_x: number;
    pos_y: number;
    pos_z: number;
    index: number;
}

/** Plant List */
export interface PlantList {
    plant_list: PlantDef[];
}

/** View Information */
export interface ViewInfo {
    view_pos_x?: number;
    view_pos_y?: number;
    view_pos_z?: number;
    view_size_x?: number;
    view_size_y?: number;
    cursor_pos_x?: number;
    cursor_pos_y?: number;
    cursor_pos_z?: number;
    follow_unit_id?: number;
    follow_item_id?: number;
}

/** Map Information */
export interface MapInfo {
    block_size_x?: number;
    block_size_y?: number;
    block_size_z?: number;
    block_pos_x?: number;
    block_pos_y?: number;
    block_pos_z?: number;
    world_name?: string;
    world_name_english?: string;
    save_name?: string;
}

/** Cloud Information */
export interface Cloud {
    front?: FrontType;
    cumulus?: CumulusType;
    cirrus?: boolean;
    stratus?: StratusType;
    fog?: FogType;
}

/** World Map */
export interface WorldMap {
    world_width: number;
    world_height: number;
    name?: string;
    name_english?: string;
    elevation: number[];
    rainfall: number[];
    vegetation: number[];
    temperature: number[];
    evilness: number[];
    drainage: number[];
    volcanism: number[];
    savagery: number[];
    clouds: Cloud[];
    salinity: number[];
    map_x?: number;
    map_y?: number;
    center_x?: number;
    center_y?: number;
    center_z?: number;
    cur_year?: number;
    cur_year_tick?: number;
    world_poles?: WorldPoles;
    river_tiles: RiverTile[];
    water_elevation: number[];
    region_tiles: RegionTile[];
}

/** Site Realization Building Wall */
export interface SiteRealizationBuildingWall {
    start_x?: number;
    start_y?: number;
    start_z?: number;
    end_x?: number;
    end_y?: number;
    end_z?: number;
}

/** Site Realization Building Tower */
export interface SiteRealizationBuildingTower {
    roof_z?: number;
    round?: boolean;
    goblin?: boolean;
}

// TypeScript Definitions for Region, Creature, and Growth Data

/** Representation of a trench spoke */
export interface TrenchSpoke {
    mound_start?: number;
    trench_start?: number;
    trench_end?: number;
    mound_end?: number;
}

/** Realization of building trenches */
export interface SiteRealizationBuildingTrenches {
    spokes: TrenchSpoke[];
}

/** Realization of a site building */
export interface SiteRealizationBuilding {
    id?: number;
    min_x?: number;
    min_y?: number;
    max_x?: number;
    max_y?: number;
    material?: MatPair;
    wall_info?: SiteRealizationBuildingWall;
    tower_info?: SiteRealizationBuildingTower;
    trench_info?: SiteRealizationBuildingTrenches;
    type?: number;
}

/** Representation of a region tile */
export interface RegionTile {
    elevation?: number;
    rainfall?: number;
    vegetation?: number;
    temperature?: number;
    evilness?: number;
    drainage?: number;
    volcanism?: number;
    savagery?: number;
    salinity?: number;
    river_tiles?: RiverTile;
    water_elevation?: number;
    surface_material?: MatPair;
    plant_materials: MatPair[];
    buildings: SiteRealizationBuilding[];
    stone_materials: MatPair[];
    tree_materials: MatPair[];
    snow?: number;
}

/** Representation of a region map */
export interface RegionMap {
    map_x?: number;
    map_y?: number;
    name?: string;
    name_english?: string;
    tiles: RegionTile[];
}

/** Representation of region maps */
export interface RegionMaps {
    world_maps: WorldMap[];
    region_maps: RegionMap[];
}

/** Enum for pattern types */
export enum PatternType {
    MONOTONE = 0,
    STRIPES = 1,
    IRIS_EYE = 2,
    SPOTS = 3,
    PUPIL_EYE = 4,
    MOTTLED = 5,
}

/** Descriptor for patterns */
export interface PatternDescriptor {
    id?: string;
    colors: ColorDefinition[];
    pattern?: PatternType;
}

/** Raw color modifier */
export interface ColorModifierRaw {
    patterns: PatternDescriptor[];
    body_part_id: number[];
    tissue_layer_id: number[];
    start_date?: number;
    end_date?: number;
    part?: string;
}

/** Raw body part layer */
export interface BodyPartLayerRaw {
    layer_name?: string;
    tissue_id?: number;
    layer_depth?: number;
    bp_modifiers: number[];
}

/** Raw body part */
export interface BodyPartRaw {
    token?: string;
    category?: string;
    parent?: number;
    flags: boolean[];
    layers: BodyPartLayerRaw[];
    relsize?: number;
}

/** Modifier for body part appearance */
export interface BpAppearanceModifier {
    type?: string;
    mod_min?: number;
    mod_max?: number;
}

/** Raw tissue definition */
export interface TissueRaw {
    id?: string;
    name?: string;
    material?: MatPair;
    subordinate_to_tissue?: string;
}

/** Raw caste definition */
export interface CasteRaw {
    index?: number;
    caste_id?: string;
    caste_name: string[];
    baby_name: string[];
    child_name: string[];
    gender?: number;
    body_parts: BodyPartRaw[];
    total_relsize?: number;
    modifiers: BpAppearanceModifier[];
    modifier_idx: number[];
    part_idx: number[];
    layer_idx: number[];
    body_appearance_modifiers: BpAppearanceModifier[];
    color_modifiers: ColorModifierRaw[];
    description?: string;
    adult_size?: number;
}

/** Raw creature definition */
export interface CreatureRaw {
    index?: number;
    creature_id?: string;
    name: string[];
    general_baby_name: string[];
    general_child_name: string[];
    creature_tile?: number;
    creature_soldier_tile?: number;
    color?: ColorDefinition;
    adultsize?: number;
    caste: CasteRaw[];
    tissues: TissueRaw[];
    flags: boolean[];
}

/** List of raw creatures */
export interface CreatureRawList {
    creature_raws: CreatureRaw[];
}

/** Representation of an army */
export interface Army {
    id?: number;
    pos_x?: number;
    pos_y?: number;
    pos_z?: number;
    leader?: UnitDefinition;
    members: UnitDefinition[];
    flags?: number;
}

/** List of armies */
export interface ArmyList {
    armies: Army[];
}

/** Representation of growth print */
export interface GrowthPrint {
    priority?: number;
    color?: number;
    timing_start?: number;
    timing_end?: number;
    tile?: number;
}

/** Representation of tree growth */
export interface TreeGrowth {
    index?: number;
    id?: string;
    name?: string;
    mat?: MatPair;
    prints: GrowthPrint[];
    timing_start?: number;
    timing_end?: number;
    twigs?: boolean;
    light_branches?: boolean;
    heavy_branches?: boolean;
    trunk?: boolean;
    roots?: boolean;
    cap?: boolean;
    sapling?: boolean;
    trunk_height_start?: number;
    trunk_height_end?: number;
}

/** Raw plant definition */
export interface PlantRaw {
    index?: number;
    id?: string;
    name?: string;
    growths: TreeGrowth[];
    tile?: number;
}

/** List of raw plants */
export interface PlantRawList {
    plant_raws: PlantRaw[];
}

/** Representation of a screen tile */
export interface ScreenTile {
    character?: number;
    foreground?: number;
    background?: number;
}

export interface ScreenCapture {
    width?: number;
    height?: number;
    tiles?: ScreenTile[];
}

export interface KeyboardEvent {
    type?: number;
    which?: number;
    state?: number;
    scancode?: number;
    sym?: number;
    mod?: number;
    unicode?: number;
}

export interface DigCommand {
    designation?: TileDigDesignation;
    locations?: Coord[];
}

export interface SingleBool {
    value?: boolean;
}

export interface VersionInfo {
    dwarf_fortress_version?: string;
    dfhack_version?: string;
    remote_fortress_reader_version?: string;
}

export interface ListRequest {
    list_start?: number;
    list_end?: number;
}

export interface Report {
    type?: number;
    text?: string;
    color?: ColorDefinition;
    duration?: number;
    continuation?: boolean;
    unconscious?: boolean;
    announcement?: boolean;
    repeat_count?: number;
    pos?: Coord;
    id?: number;
    year?: number;
    time?: number;
}

export interface Status {
    reports?: Report[];
}

export interface ShapeDescriptor {
    id?: string;
    tile?: number;
}

export interface Language {
    shapes?: ShapeDescriptor[];
}

export interface ItemImprovement {
    material?: MatPair;
    shape?: number;
    specific_type?: number;
    image?: ArtImage;
    type?: number;
}

export enum ArtImageElementType {
    IMAGE_CREATURE = 0,
    IMAGE_PLANT = 1,
    IMAGE_TREE = 2,
    IMAGE_SHAPE = 3,
    IMAGE_ITEM = 4,
}

export interface ArtImageElement {
    count?: number;
    type?: ArtImageElementType;
    creature_item?: MatPair;
    material?: MatPair;
    id?: number;
}

export enum ArtImagePropertyType {
    TRANSITIVE_VERB = 0,
    INTRANSITIVE_VERB = 1,
}

export interface ArtImageProperty {
    subject?: number;
    object?: number;
    verb?: ArtImageVerb;
    type?: ArtImagePropertyType;
}

export interface ArtImage {
    elements?: ArtImageElement[];
    id?: MatPair;
    properties?: ArtImageProperty[];
}

export interface Engraving {
    pos?: Coord;
    quality?: number;
    tile?: number;
    image?: ArtImage;
    floor?: boolean;
    west?: boolean;
    east?: boolean;
    north?: boolean;
    south?: boolean;
    hidden?: boolean;
    northwest?: boolean;
    northeast?: boolean;
    southwest?: boolean;
    southeast?: boolean;
}

export enum ArtImageVerb {
    VERB_WITHERING = 0,
    VERB_SURROUNDEDBY = 1,
    VERB_MASSACRING = 2,
    VERB_FIGHTING = 3,
    VERB_LABORING = 4,
    VERB_GREETING = 5,
    VERB_REFUSING = 6,
    VERB_SPEAKING = 7,
    VERB_EMBRACING = 8,
    VERB_STRIKINGDOWN = 9,
    VERB_MENACINGPOSE = 10,
    VERB_TRAVELING = 11,
    VERB_RAISING = 12,
    VERB_HIDING = 13,
    VERB_LOOKINGCONFUSED = 14,
    VERB_LOOKINGTERRIFIED = 15,
    VERB_DEVOURING = 16,
    VERB_ADMIRING = 17,
    VERB_BURNING = 18,
    VERB_WEEPING = 19,
    VERB_LOOKINGDEJECTED = 20,
    VERB_CRINGING = 21,
    VERB_SCREAMING = 22,
    VERB_SUBMISSIVEGESTURE = 23,
    VERB_FETALPOSITION = 24,
    VERB_SMEAREDINTOSPIRAL = 25,
    VERB_FALLING = 26,
    VERB_DEAD = 27,
    VERB_LAUGHING = 28,
    VERB_LOOKINGOFFENDED = 29,
    VERB_BEINGSHOT = 30,
    VERB_PLAINTIVEGESTURE = 31,
    VERB_MELTING = 32,
    VERB_SHOOTING = 33,
    VERB_TORTURING = 34,
    VERB_COMMITTINGDEPRAVEDACT = 35,
    VERB_PRAYING = 36,
    VERB_CONTEMPLATING = 37,
    VERB_COOKING = 38,
    VERB_ENGRAVING = 39,
    VERB_PROSTRATING = 40,
    VERB_SUFFERING = 41,
    VERB_BEINGIMPALED = 42,
    VERB_BEINGCONTORTED = 43,
    VERB_BEINGFLAYED = 44,
    VERB_HANGINGFROM = 45,
    VERB_BEINGMUTILATED = 46,
    VERB_TRIUMPHANTPOSE = 47,
}

export enum FlowType {
    Miasma = 0,
    Steam = 1,
    Mist = 2,
    MaterialDust = 3,
    MagmaMist = 4,
    Smoke = 5,
    Dragonfire = 6,
    Fire = 7,
    Web = 8,
    MaterialGas = 9,
    MaterialVapor = 10,
    OceanWave = 11,
    SeaFoam = 12,
    ItemCloud = 13,
    CampFire = -1,
}

export interface FlowInfo {
    index?: number;
    type?: FlowType;
    density?: number;
    pos?: Coord;
    dest?: Coord;
    expanding?: boolean;
    reuse?: boolean;
    guide_id?: number;
    material?: MatPair;
    item?: MatPair;
}

export interface Wave {
    dest?: Coord;
    pos?: Coord;
}
