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
    x?: number; /* x */
    y?: number; /* y */
    z?: number; /* z */
}

/** Representation of a tile type */
export interface Tiletype {
    id: number; /* id */
    name?: string; /* name */
    caption?: string; /* caption */
    shape?: TiletypeShape; /* shape */
    special?: TiletypeSpecial; /* special */
    material?: TiletypeMaterial; /* material */
    variant?: TiletypeVariant; /* variant */
    direction?: string; /* direction */
}

/** List of tile types */
export interface TiletypeList {
    tiletypeList: Tiletype[]; /* tiletype_list */
}

/** Representation of building extents */
export interface BuildingExtents {
    posX: number; /* pos_x */
    posY: number; /* pos_y */
    width: number; /* width */
    height: number; /* height */
    extents: number[]; /* extents */
}

/** Representation of a building item */
export interface BuildingItem {
    item?: Item; /* item */
    mode?: number; /* mode */
}

/** Representation of a building instance */
export interface BuildingInstance {
    index: number; /* index */
    posXMin?: number; /* pos_x_min */
    posYMin?: number; /* pos_y_min */
    posZMin?: number; /* pos_z_min */
    posXMax?: number; /* pos_x_max */
    posYMax?: number; /* pos_y_max */
    posZMax?: number; /* pos_z_max */
    buildingType?: BuildingType; /* building_type */
    material?: MatPair; /* material */
    buildingFlags?: number; /* building_flags */
    isRoom?: boolean; /* is_room */
    room?: BuildingExtents; /* room */
    direction?: BuildingDirection; /* direction */
    items?: BuildingItem[]; /* items */
    active?: number; /* active */
}

/** Representation of a river edge */
export interface RiverEdge {
    minPos?: number; /* min_pos */
    maxPos?: number; /* max_pos */
    active?: number; /* active */
    elevation?: number; /* elevation */
}

/** Representation of a river tile */
export interface RiverTile {
    north?: RiverEdge; /* north */
    south?: RiverEdge; /* south */
    east?: RiverEdge; /* east */
    west?: RiverEdge; /* west */
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
    material?: MatPair; /* material */
    amount?: number; /* amount */
    state?: MatterState; /* state */
    item?: MatPair; /* item */
}

/** Representation of a spatter pile */
export interface SpatterPile {
    spatters: Spatter[]; /* spatters */
}

/** Representation of an item */
export interface Item {
    id?: number; /* id */
    pos?: Coord; /* pos */
    flags1?: number; /* flags1 */
    flags2?: number; /* flags2 */
    type?: MatPair; /* type */
    material?: MatPair; /* material */
    dye?: ColorDefinition; /* dye */
    stackSize?: number; /* stack_size */
    subposX?: number; /* subpos_x */
    subposY?: number; /* subpos_y */
    subposZ?: number; /* subpos_z */
    projectile?: boolean; /* projectile */
    velocityX?: number; /* velocity_x */
    velocityY?: number; /* velocity_y */
    velocityZ?: number; /* velocity_z */
    volume?: number; /* volume */
    improvements?: ItemImprovement[]; /* improvements */
    image?: ArtImage; /* image */
}

/** Representation of a plant tile */
export interface PlantTile {
    trunk?: boolean; /* trunk */
    connectionEast?: boolean; /* connection_east */
    connectionSouth?: boolean; /* connection_south */
    connectionWest?: boolean; /* connection_west */
    connectionNorth?: boolean; /* connection_north */
    branches?: boolean; /* branches */
    twigs?: boolean; /* twigs */
    tileType?: TiletypeSpecial; /* tile_type */
}

/** Representation of tree information */
export interface TreeInfo {
    size?: Coord; /* size */
    tiles?: PlantTile[]; /* tiles */
}

/** Representation of a plant instance */
export interface PlantInstance {
    plantType?: number; /* plant_type */
    pos?: Coord; /* pos */
    treeInfo?: TreeInfo; /* tree_info */
}

/** Representation of a map block */
export interface MapBlock {
    mapX: number; /* map_x */
    mapY: number; /* map_y */
    mapZ: number; /* map_z */
    tiles: number[]; /* tiles */
    materials: MatPair[]; /* materials */
    layerMaterials: MatPair[]; /* layer_materials */
    veinMaterials: MatPair[]; /* vein_materials */
    baseMaterials: MatPair[]; /* base_materials */
    magma: number[]; /* magma */
    water: number[]; /* water */
    hidden: boolean[]; /* hidden */
    light: boolean[]; /* light */
    subterranean: boolean[]; /* subterranean */
    outside: boolean[]; /* outside */
    aquifer: boolean[]; /* aquifer */
    waterStagnant: boolean[]; /* water_stagnant */
    waterSalt: boolean[]; /* water_salt */
    constructionItems: MatPair[]; /* construction_items */
    buildings: BuildingInstance[]; /* buildings */
    treePercent: number[]; /* tree_percent */
    treeX: number[]; /* tree_x */
    treeY: number[]; /* tree_y */
    treeZ: number[]; /* tree_z */
    tileDigDesignation: TileDigDesignation[]; /* tile_dig_designation */
    spatterPile: SpatterPile[]; /* spatterPile */
    items: Item[]; /* items */
    tileDigDesignationMarker: boolean[]; /* tile_dig_designation_marker */
    tileDigDesignationAuto: boolean[]; /* tile_dig_designation_auto */
    grassPercent: number[]; /* grass_percent */
    flows: FlowInfo[]; /* flows */
}

// TypeScript Type Definitions for Materials, Buildings, Units, and World Info

/** Material Pair */
export interface MatPair {
    matType: number; /* mat_type */
    matIndex: number; /* mat_index */
}

/** RGB Color Definition */
export interface ColorDefinition {
    red: number; /* red */
    green: number; /* green */
    blue: number; /* blue */
}

/** Material Definition */
export interface MaterialDefinition {
    matPair: MatPair; /* mat_pair */
    id?: string; /* id */
    name?: string; /* name */
    stateColor?: ColorDefinition; /* state_color */
    instrument?: InstrumentDef; /* instrument */
    upStep?: number; /* up_step */
    downStep?: number; /* down_step */
    layer?: ArmorLayer; /* layer */
}

/** Building Type */
export interface BuildingType {
    buildingType: number; /* building_type */
    buildingSubtype: number; /* building_subtype */
    buildingCustom: number; /* building_custom */
}

/** Building Definition */
export interface BuildingDefinition {
    buildingType: BuildingType; /* building_type */
    id?: string; /* id */
    name?: string; /* name */
}

/** Building List */
export interface BuildingList {
    buildingList: BuildingDefinition[]; /* building_list */
}

/** Material List */
export interface MaterialList {
    materialList: MaterialDefinition[]; /* material_list */
}

/** Hair Definition */
export interface Hair {
    length?: number; /* length */
    style?: HairStyle; /* style */
}

/** Body Size Information */
export interface BodySizeInfo {
    sizeCur?: number; /* size_cur */
    sizeBase?: number; /* size_base */
    areaCur?: number; /* area_cur */
    areaBase?: number; /* area_base */
    lengthCur?: number; /* length_cur */
    lengthBase?: number; /* length_base */
}

/** Unit Appearance */
export interface UnitAppearance {
    bodyModifiers: number[]; /* body_modifiers */
    bpModifiers: number[]; /* bp_modifiers */
    sizeModifier?: number; /* size_modifier */
    colors: number[]; /* colors */
    hair?: Hair; /* hair */
    beard?: Hair; /* beard */
    moustache?: Hair; /* moustache */
    sideburns?: Hair; /* sideburns */
    physicalDescription?: string; /* physical_description */
}

/** Inventory Item */
export interface InventoryItem {
    mode?: InventoryMode; /* mode */
    item?: Item; /* item */
    bodyPartId?: number; /* body_part_id */
}

/** Wound Part */
export interface WoundPart {
    globalLayerIdx?: number; /* global_layer_idx */
    bodyPartId?: number; /* body_part_id */
    layerIdx?: number; /* layer_idx */
}

/** Unit Wound */
export interface UnitWound {
    parts: WoundPart[]; /* parts */
    severedPart?: boolean; /* severed_part */
}

/** Unit Definition */
export interface UnitDefinition {
    id: number; /* id */
    isValid?: boolean; /* isValid */
    posX?: number; /* pos_x */
    posY?: number; /* pos_y */
    posZ?: number; /* pos_z */
    race?: MatPair; /* race */
    professionColor?: ColorDefinition; /* profession_color */
    flags1?: number; /* flags1 */
    flags2?: number; /* flags2 */
    flags3?: number; /* flags3 */
    isSoldier?: boolean; /* is_soldier */
    sizeInfo?: BodySizeInfo; /* size_info */
    name?: string; /* name */
    bloodMax?: number; /* blood_max */
    bloodCount?: number; /* blood_count */
    appearance?: UnitAppearance; /* appearance */
    professionId?: number; /* profession_id */
    noblePositions: string[]; /* noble_positions */
    riderId?: number; /* rider_id */
    inventory: InventoryItem[]; /* inventory */
    subposX?: number; /* subpos_x */
    subposY?: number; /* subpos_y */
    subposZ?: number; /* subpos_z */
    facing?: Coord; /* facing */
    age?: number; /* age */
    wounds: UnitWound[]; /* wounds */
}

/** Unit List */
export interface UnitList {
    creatureList: UnitDefinition[]; /* creature_list */
}

/** Block Request */
export interface BlockRequest {
    blocksNeeded?: number; /* blocks_needed */
    minX?: number; /* min_x */
    maxX?: number; /* max_x */
    minY?: number; /* min_y */
    maxY?: number; /* max_y */
    minZ?: number; /* min_z */
    maxZ?: number; /* max_z */
}

/** Block List */
export interface BlockList {
    mapBlocks: MapBlock[]; /* map_blocks */
    mapX?: number; /* map_x */
    mapY?: number; /* map_y */
    engravings?: Engraving[]; /* engravings */
    oceanWaves?: Wave[]; /* ocean_waves */
}

/** Plant Definition */
export interface PlantDef {
    posX: number; /* pos_x */
    posY: number; /* pos_y */
    posZ: number; /* pos_z */
    index: number; /* index */
}

/** Plant List */
export interface PlantList {
    plantList: PlantDef[]; /* plant_list */
}

/** View Information */
export interface ViewInfo {
    viewPosX?: number; /* view_pos_x */
    viewPosY?: number; /* view_pos_y */
    viewPosZ?: number; /* view_pos_z */
    viewSizeX?: number; /* view_size_x */
    viewSizeY?: number; /* view_size_y */
    cursorPosX?: number; /* cursor_pos_x */
    cursorPosY?: number; /* cursor_pos_y */
    cursorPosZ?: number; /* cursor_pos_z */
    followUnitId?: number; /* follow_unit_id */
    followItemId?: number; /* follow_item_id */
}

/** Map Information */
export interface MapInfo {
    blockSizeX?: number; /* block_size_x */
    blockSizeY?: number; /* block_size_y */
    blockSizeZ?: number; /* block_size_z */
    blockPosX?: number; /* block_pos_x */
    blockPosY?: number; /* block_pos_y */
    blockPosZ?: number; /* block_pos_z */
    worldName?: string; /* world_name */
    worldNameEnglish?: string; /* world_name_english */
    saveName?: string; /* save_name */
}

/** Cloud Information */
export interface Cloud {
    front?: FrontType; /* front */
    cumulus?: CumulusType; /* cumulus */
    cirrus?: boolean; /* cirrus */
    stratus?: StratusType; /* stratus */
    fog?: FogType; /* fog */
}

/** World Map */
export interface WorldMap {
    worldWidth: number; /* world_width */
    worldHeight: number; /* world_height */
    name?: string; /* name */
    nameEnglish?: string; /* name_english */
    elevation: number[]; /* elevation */
    rainfall: number[]; /* rainfall */
    vegetation: number[]; /* vegetation */
    temperature: number[]; /* temperature */
    evilness: number[]; /* evilness */
    drainage: number[]; /* drainage */
    volcanism: number[]; /* volcanism */
    savagery: number[]; /* savagery */
    clouds: Cloud[]; /* clouds */
    salinity: number[]; /* salinity */
    mapX?: number; /* map_x */
    mapY?: number; /* map_y */
    centerX?: number; /* center_x */
    centerY?: number; /* center_y */
    centerZ?: number; /* center_z */
    curYear?: number; /* cur_year */
    curYearTick?: number; /* cur_year_tick */
    worldPoles?: WorldPoles; /* world_poles */
    riverTiles: RiverTile[]; /* river_tiles */
    waterElevation: number[]; /* water_elevation */
    regionTiles: RegionTile[]; /* region_tiles */
}

/** Site Realization Building Wall */
export interface SiteRealizationBuildingWall {
    startX?: number; /* start_x */
    startY?: number; /* start_y */
    startZ?: number; /* start_z */
    endX?: number; /* end_x */
    endY?: number; /* end_y */
    endZ?: number; /* end_z */
}

/** Site Realization Building Tower */
export interface SiteRealizationBuildingTower {
    roofZ?: number; /* roof_z */
    round?: boolean; /* round */
    goblin?: boolean; /* goblin */
}

// TypeScript Definitions for Region, Creature, and Growth Data

/** Representation of a trench spoke */
export interface TrenchSpoke {
    moundStart?: number; /* mound_start */
    trenchStart?: number; /* trench_start */
    trenchEnd?: number; /* trench_end */
    moundEnd?: number; /* mound_end */
}

/** Realization of building trenches */
export interface SiteRealizationBuildingTrenches {
    spokes: TrenchSpoke[]; /* spokes */
}

/** Realization of a site building */
export interface SiteRealizationBuilding {
    id?: number; /* id */
    minX?: number; /* min_x */
    minY?: number; /* min_y */
    maxX?: number; /* max_x */
    maxY?: number; /* max_y */
    material?: MatPair; /* material */
    wallInfo?: SiteRealizationBuildingWall; /* wall_info */
    towerInfo?: SiteRealizationBuildingTower; /* tower_info */
    trenchInfo?: SiteRealizationBuildingTrenches; /* trench_info */
    type?: number; /* type */
}

/** Representation of a region tile */
export interface RegionTile {
    elevation?: number; /* elevation */
    rainfall?: number; /* rainfall */
    vegetation?: number; /* vegetation */
    temperature?: number; /* temperature */
    evilness?: number; /* evilness */
    drainage?: number; /* drainage */
    volcanism?: number; /* volcanism */
    savagery?: number; /* savagery */
    salinity?: number; /* salinity */
    riverTiles?: RiverTile; /* river_tiles */
    waterElevation?: number; /* water_elevation */
    surfaceMaterial?: MatPair; /* surface_material */
    plantMaterials: MatPair[]; /* plant_materials */
    buildings: SiteRealizationBuilding[]; /* buildings */
    stoneMaterials: MatPair[]; /* stone_materials */
    treeMaterials: MatPair[]; /* tree_materials */
    snow?: number; /* snow */
}

/** Representation of a region map */
export interface RegionMap {
    mapX?: number; /* map_x */
    mapY?: number; /* map_y */
    name?: string; /* name */
    nameEnglish?: string; /* name_english */
    tiles: RegionTile[]; /* tiles */
}

/** Representation of region maps */
export interface RegionMaps {
    worldMaps: WorldMap[]; /* world_maps */
    regionMaps: RegionMap[]; /* region_maps */
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
    id?: string; /* id */
    colors: ColorDefinition[]; /* colors */
    pattern?: PatternType; /* pattern */
}

/** Raw color modifier */
export interface ColorModifierRaw {
    patterns: PatternDescriptor[]; /* patterns */
    bodyPartId: number[]; /* body_part_id */
    tissueLayerId: number[]; /* tissue_layer_id */
    startDate?: number; /* start_date */
    endDate?: number; /* end_date */
    part?: string; /* part */
}

/** Raw body part layer */
export interface BodyPartLayerRaw {
    layerName?: string; /* layer_name */
    tissueId?: number; /* tissue_id */
    layerDepth?: number; /* layer_depth */
    bpModifiers: number[]; /* bp_modifiers */
}

/** Raw body part */
export interface BodyPartRaw {
    token?: string; /* token */
    category?: string; /* category */
    parent?: number; /* parent */
    flags: boolean[]; /* flags */
    layers: BodyPartLayerRaw[]; /* layers */
    relsize?: number; /* relsize */
}

/** Modifier for body part appearance */
export interface BpAppearanceModifier {
    type?: string; /* type */
    modMin?: number; /* mod_min */
    modMax?: number; /* mod_max */
}

/** Raw tissue definition */
export interface TissueRaw {
    id?: string; /* id */
    name?: string; /* name */
    material?: MatPair; /* material */
    subordinateToTissue?: string; /* subordinate_to_tissue */
}

/** Raw caste definition */
export interface CasteRaw {
    index?: number; /* index */
    casteId?: string; /* caste_id */
    casteName: string[]; /* caste_name */
    babyName: string[]; /* baby_name */
    childName: string[]; /* child_name */
    gender?: number; /* gender */
    bodyParts: BodyPartRaw[]; /* body_parts */
    totalRelsize?: number; /* total_relsize */
    modifiers: BpAppearanceModifier[]; /* modifiers */
    modifierIdx: number[]; /* modifier_idx */
    partIdx: number[]; /* part_idx */
    layerIdx: number[]; /* layer_idx */
    bodyAppearanceModifiers: BpAppearanceModifier[]; /* body_appearance_modifiers */
    colorModifiers: ColorModifierRaw[]; /* color_modifiers */
    description?: string; /* description */
    adultSize?: number; /* adult_size */
}

/** Raw creature definition */
export interface CreatureRaw {
    index?: number; /* index */
    creatureId?: string; /* creature_id */
    name: string[]; /* name */
    generalBabyName: string[]; /* general_baby_name */
    generalChildName: string[]; /* general_child_name */
    creatureTile?: number; /* creature_tile */
    creatureSoldierTile?: number; /* creature_soldier_tile */
    color?: ColorDefinition; /* color */
    adultsize?: number; /* adultsize */
    caste: CasteRaw[]; /* caste */
    tissues: TissueRaw[]; /* tissues */
    flags: boolean[]; /* flags */
}

/** List of raw creatures */
export interface CreatureRawList {
    creatureRaws: CreatureRaw[]; /* creature_raws */
}

/** Representation of an army */
export interface Army {
    id?: number; /* id */
    posX?: number; /* pos_x */
    posY?: number; /* pos_y */
    posZ?: number; /* pos_z */
    leader?: UnitDefinition; /* leader */
    members: UnitDefinition[]; /* members */
    flags?: number; /* flags */
}

/** List of armies */
export interface ArmyList {
    armies: Army[]; /* armies */
}

/** Representation of growth print */
export interface GrowthPrint {
    priority?: number; /* priority */
    color?: number; /* color */
    timingStart?: number; /* timing_start */
    timingEnd?: number; /* timing_end */
    tile?: number; /* tile */
}

/** Representation of tree growth */
export interface TreeGrowth {
    index?: number; /* index */
    id?: string; /* id */
    name?: string; /* name */
    mat?: MatPair; /* mat */
    prints: GrowthPrint[]; /* prints */
    timingStart?: number; /* timing_start */
    timingEnd?: number; /* timing_end */
    twigs?: boolean; /* twigs */
    lightBranches?: boolean; /* light_branches */
    heavyBranches?: boolean; /* heavy_branches */
    trunk?: boolean; /* trunk */
    roots?: boolean; /* roots */
    cap?: boolean; /* cap */
    sapling?: boolean; /* sapling */
    trunkHeightStart?: number; /* trunk_height_start */
    trunkHeightEnd?: number; /* trunk_height_end */
}

/** Raw plant definition */
export interface PlantRaw {
    index?: number; /* index */
    id?: string; /* id */
    name?: string; /* name */
    growths: TreeGrowth[]; /* growths */
    tile?: number; /* tile */
}

/** List of raw plants */
export interface PlantRawList {
    plantRaws: PlantRaw[]; /* plant_raws */
}

/** Representation of a screen tile */
export interface ScreenTile {
    character?: number; /* character */
    foreground?: number; /* foreground */
    background?: number; /* background */
}

export interface ScreenCapture {
    width?: number; /* width */
    height?: number; /* height */
    tiles?: ScreenTile[]; /* tiles */
}

export interface KeyboardEvent {
    type?: number; /* type */
    which?: number; /* which */
    state?: number; /* state */
    scancode?: number; /* scancode */
    sym?: number; /* sym */
    mod?: number; /* mod */
    unicode?: number; /* unicode */
}

export interface DigCommand {
    designation?: TileDigDesignation; /* designation */
    locations?: Coord[]; /* locations */
}

export interface SingleBool {
    value?: boolean; /* value */
}

export interface VersionInfo {
    dwarfFortressVersion?: string; /* dwarf_fortress_version */
    dfhackVersion?: string; /* dfhack_version */
    remoteFortressReaderVersion?: string; /* remote_fortress_reader_version */
}

export interface ListRequest {
    listStart?: number; /* list_start */
    listEnd?: number; /* list_end */
}

export interface Report {
    type?: number; /* type */
    text?: string; /* text */
    color?: ColorDefinition; /* color */
    duration?: number; /* duration */
    continuation?: boolean; /* continuation */
    unconscious?: boolean; /* unconscious */
    announcement?: boolean; /* announcement */
    repeatCount?: number; /* repeat_count */
    pos?: Coord; /* pos */
    id?: number; /* id */
    year?: number; /* year */
    time?: number; /* time */
}

export interface Status {
    reports?: Report[]; /* reports */
}

export interface ShapeDescriptor {
    id?: string; /* id */
    tile?: number; /* tile */
}

export interface Language {
    shapes?: ShapeDescriptor[]; /* shapes */
}

export interface ItemImprovement {
    material?: MatPair; /* material */
    shape?: number; /* shape */
    specificType?: number; /* specific_type */
    image?: ArtImage; /* image */
    type?: number; /* type */
}

export enum ArtImageElementType {
    IMAGE_CREATURE = 0,
    IMAGE_PLANT = 1,
    IMAGE_TREE = 2,
    IMAGE_SHAPE = 3,
    IMAGE_ITEM = 4,
}

export interface ArtImageElement {
    count?: number; /* count */
    type?: ArtImageElementType; /* type */
    creatureItem?: MatPair; /* creature_item */
    material?: MatPair; /* material */
    id?: number; /* id */
}

export enum ArtImagePropertyType {
    TRANSITIVE_VERB = 0,
    INTRANSITIVE_VERB = 1,
}

export interface ArtImageProperty {
    subject?: number; /* subject */
    object?: number; /* object */
    verb?: ArtImageVerb; /* verb */
    type?: ArtImagePropertyType; /* type */
}

export interface ArtImage {
    elements?: ArtImageElement[]; /* elements */
    id?: MatPair; /* id */
    properties?: ArtImageProperty[]; /* properties */
}

export interface Engraving {
    pos?: Coord; /* pos */
    quality?: number; /* quality */
    tile?: number; /* tile */
    image?: ArtImage; /* image */
    floor?: boolean; /* floor */
    west?: boolean; /* west */
    east?: boolean; /* east */
    north?: boolean; /* north */
    south?: boolean; /* south */
    hidden?: boolean; /* hidden */
    northwest?: boolean; /* northwest */
    northeast?: boolean; /* northeast */
    southwest?: boolean; /* southwest */
    southeast?: boolean; /* southeast */
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
    index?: number; /* index */
    type?: FlowType; /* type */
    density?: number; /* density */
    pos?: Coord; /* pos */
    dest?: Coord; /* dest */
    expanding?: boolean; /* expanding */
    reuse?: boolean; /* reuse */
    guideId?: number; /* guide_id */
    material?: MatPair; /* material */
    item?: MatPair; /* item */
}

export interface Wave {
    dest?: Coord; /* dest */
    pos?: Coord; /* pos */
}
