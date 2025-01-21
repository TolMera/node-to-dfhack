/**
 * Type definitions converted from proto to TypeScript.
 */

/**
 * Representation of an Enum Item Name.
 */
export interface EnumItemName {
    value: number; /* value */
    name?: string; /* name */
    bitSize?: number; // Default: 1 /* bit_size */
}

/**
 * Basic material identifier.
 */
export interface BasicMaterialId {
    type: number; /* type */
    index: number; /* index */
}

/**
 * Detailed information about a basic material.
 */
export interface BasicMaterialInfo {
    type: number; /* type */
    index: number; /* index */
    token: string; /* token */
    flags?: number[]; /* flags */
    subtype?: number; // Default: -1 /* subtype */
    creatureId?: number; // Default: -1 /* creature_id */
    plantId?: number; // Default: -1 /* plant_id */
    histfigId?: number; // Default: -1 /* histfig_id */
    namePrefix?: string; // Default: "" /* name_prefix */
    stateColor?: number[]; /* state_color */
    stateName?: string[]; /* state_name */
    stateAdj?: string[]; /* state_adj */
    reactionClass?: string[]; /* reaction_class */
    reactionProduct?: Array<{ /* reaction_product */
        id: string; /* id */
        type: number; /* type */
        index: number; /* index */
    }>;
    inorganicFlags?: number[]; /* inorganic_flags */
}

/**
 * Mask for filtering BasicMaterialInfo.
 */
export interface BasicMaterialInfoMask {
    states?: Array<'Solid' | 'Liquid' | 'Gas' | 'Powder' | 'Paste' | 'Pressed'>; /* states */
    temperature?: number; // Default: 10015 /* temperature */
    flags?: boolean; // Default: false /* flags */
    reaction?: boolean; // Default: false /* reaction */
}

/**
 * Job skill attributes.
 */
export interface JobSkillAttr {
    id: number; /* id */
    key: string; /* key */
    caption?: string; /* caption */
    captionNoun?: string; /* caption_noun */
    profession?: number; /* profession */
    labor?: number; /* labor */
    type?: string; /* type */
}

/**
 * Profession attributes.
 */
export interface ProfessionAttr {
    id: number; /* id */
    key: string; /* key */
    caption?: string; /* caption */
    military?: boolean; /* military */
    canAssignLabor?: boolean; /* can_assign_labor */
    parent?: number; /* parent */
}

/**
 * Unit labor attributes.
 */
export interface UnitLaborAttr {
    id: number; /* id */
    key: string; /* key */
    caption?: string; /* caption */
}

/**
 * Information about a name.
 */
export interface NameInfo {
    firstName?: string; /* first_name */
    nickname?: string; /* nickname */
    languageId?: number; // Default: -1 /* language_id */
    lastName?: string; /* last_name */
    englishName?: string; /* english_name */
}

/**
 * Representation of a name triple.
 */
export interface NameTriple {
    normal: string; /* normal */
    plural?: string; /* plural */
    adjective?: string; /* adjective */
}

/**
 * Curse information for a unit.
 */
export interface UnitCurseInfo {
    addTags1: number; /* add_tags1 */
    remTags1: number; /* rem_tags1 */
    addTags2: number; /* add_tags2 */
    remTags2: number; /* rem_tags2 */
    name?: NameTriple; /* name */
}

/**
 * Skill information for a unit.
 */
export interface SkillInfo {
    id: number; /* id */
    level: number; /* level */
    experience: number; /* experience */
}

/**
 * Miscellaneous traits of a unit.
 */
export interface UnitMiscTrait {
    id: number; /* id */
    value: number; /* value */
}

/**
 * Basic information about a unit.
 */
export interface BasicUnitInfo {
    unitId: number; /* unit_id */
    posX: number; /* pos_x */
    posY: number; /* pos_y */
    posZ: number; /* pos_z */
    name?: NameInfo; /* name */
    flags1: number; /* flags1 */
    flags2: number; /* flags2 */
    flags3: number; /* flags3 */
    race: number; /* race */
    caste: number; /* caste */
    gender?: number; // Default: -1 /* gender */
    civId?: number; // Default: -1 /* civ_id */
    histfigId?: number; // Default: -1 /* histfig_id */
    deathId?: number; // Default: -1 /* death_id */
    deathFlags?: number; /* death_flags */
    squadId?: number; // Default: -1 /* squad_id */
    squadPosition?: number; // Default: -1 /* squad_position */
    profession?: number; // Default: -1 /* profession */
    customProfession?: string; /* custom_profession */
    labors?: number[]; /* labors */
    skills?: SkillInfo[]; /* skills */
    miscTraits?: UnitMiscTrait[]; /* misc_traits */
    curse?: UnitCurseInfo; /* curse */
    burrows?: number[]; /* burrows */
}

/**
 * Mask for filtering BasicUnitInfo.
 */
export interface BasicUnitInfoMask {
    labors?: boolean; // Default: false /* labors */
    skills?: boolean; // Default: false /* skills */
    profession?: boolean; // Default: false /* profession */
    miscTraits?: boolean; // Default: false /* misc_traits */
}

/**
 * Basic information about a squad.
 */
export interface BasicSquadInfo {
    squadId: number; /* squad_id */
    name?: NameInfo; /* name */
    alias?: string; /* alias */
    members?: number[]; /* members */
}

/**
 * Labor state of a unit.
 */
export interface UnitLaborState {
    unitId: number; /* unit_id */
    labor: number; /* labor */
    value: boolean; /* value */
}
