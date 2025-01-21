/**
 * TypeScript type definitions for dfproto.
 */

/**
 * Information about the world state.
 */
export interface GetWorldInfoOut {
    mode: 'MODE_DWARF' | 'MODE_ADVENTURE' | 'MODE_LEGENDS'; /* mode */
    saveDir: string; /* save_dir */
    worldName?: NameInfo; /* world_name */
    civId?: number; /* civ_id */
    siteId?: number; /* site_id */
    groupId?: number; /* group_id */
    raceId?: number; /* race_id */
    playerUnitId?: number; /* player_unit_id */
    playerHistfigId?: number; /* player_histfig_id */
    companionHistfigIds?: number[]; /* companion_histfig_ids */
}

/**
 * Output structure for listing enums.
 */
export interface ListEnumsOut {
    materialFlags?: EnumItemName[]; /* material_flags */
    inorganicFlags?: EnumItemName[]; /* inorganic_flags */
    unitFlags1?: EnumItemName[]; /* unit_flags1 */
    unitFlags2?: EnumItemName[]; /* unit_flags2 */
    unitFlags3?: EnumItemName[]; /* unit_flags3 */
    unitLabor?: EnumItemName[]; /* unit_labor */
    jobSkill?: EnumItemName[]; /* job_skill */
    cieAddTagMask1?: EnumItemName[]; /* cie_add_tag_mask1 */
    cieAddTagMask2?: EnumItemName[]; /* cie_add_tag_mask2 */
    deathInfoFlags?: EnumItemName[]; /* death_info_flags */
    profession?: EnumItemName[]; /* profession */
}

/**
 * Output structure for listing job skills.
 */
export interface ListJobSkillsOut {
    skill?: JobSkillAttr[]; /* skill */
    profession?: ProfessionAttr[]; /* profession */
    labor?: UnitLaborAttr[]; /* labor */
}

/**
 * Input structure for listing materials.
 */
export interface ListMaterialsIn {
    mask?: BasicMaterialInfoMask; /* mask */
    idList?: BasicMaterialId[]; /* id_list */
    builtin?: boolean; /* builtin */
    inorganic?: boolean; /* inorganic */
    creatures?: boolean; /* creatures */
    plants?: boolean; /* plants */
}

/**
 * Output structure for listing materials.
 */
export interface ListMaterialsOut {
    value?: BasicMaterialInfo[]; /* value */
}

/**
 * Input structure for listing units.
 */
export interface ListUnitsIn {
    mask?: BasicUnitInfoMask; /* mask */
    idList?: number[]; /* id_list */
    scanAll?: boolean; /* scan_all */
    race?: number; /* race */
    civId?: number; /* civ_id */
    dead?: boolean; /* dead */
    alive?: boolean; /* alive */
    sane?: boolean; /* sane */
}

/**
 * Output structure for listing units.
 */
export interface ListUnitsOut {
    value?: BasicUnitInfo[]; /* value */
}

/**
 * Input structure for listing squads.
 */
export interface ListSquadsIn {}

/**
 * Output structure for listing squads.
 */
export interface ListSquadsOut {
    value?: BasicSquadInfo[]; /* value */
}

/**
 * Input structure for setting unit labors.
 */
export interface SetUnitLaborsIn {
    change?: UnitLaborState[]; /* change */
}

/**
 * Representation of an Enum Item Name.
 */
export interface EnumItemName {
    value: number; /* value */
    name?: string; /* name */
    bitSize?: number; // Default: 1 /* bit_size */
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
 * Basic material identifier.
 */
export interface BasicMaterialId {
    type: number; /* type */
    index: number; /* index */
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
 * Mask for filtering BasicUnitInfo.
 */
export interface BasicUnitInfoMask {
    labors?: boolean; // Default: false /* labors */
    skills?: boolean; // Default: false /* skills */
    profession?: boolean; // Default: false /* profession */
    miscTraits?: boolean; // Default: false /* misc_traits */
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
 * Representation of a name triple.
 */
export interface NameTriple {
    normal: string; /* normal */
    plural?: string; /* plural */
    adjective?: string; /* adjective */
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
