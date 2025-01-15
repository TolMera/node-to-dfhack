/**
 * TypeScript type definitions for dfproto.
 */

/**
 * Information about the world state.
 */
export interface GetWorldInfoOut {
    mode: 'MODE_DWARF' | 'MODE_ADVENTURE' | 'MODE_LEGENDS';
    save_dir: string;
    world_name?: NameInfo;
    civ_id?: number;
    site_id?: number;
    group_id?: number;
    race_id?: number;
    player_unit_id?: number;
    player_histfig_id?: number;
    companion_histfig_ids?: number[];
}

/**
 * Output structure for listing enums.
 */
export interface ListEnumsOut {
    material_flags?: EnumItemName[];
    inorganic_flags?: EnumItemName[];
    unit_flags1?: EnumItemName[];
    unit_flags2?: EnumItemName[];
    unit_flags3?: EnumItemName[];
    unit_labor?: EnumItemName[];
    job_skill?: EnumItemName[];
    cie_add_tag_mask1?: EnumItemName[];
    cie_add_tag_mask2?: EnumItemName[];
    death_info_flags?: EnumItemName[];
    profession?: EnumItemName[];
}

/**
 * Output structure for listing job skills.
 */
export interface ListJobSkillsOut {
    skill?: JobSkillAttr[];
    profession?: ProfessionAttr[];
    labor?: UnitLaborAttr[];
}

/**
 * Input structure for listing materials.
 */
export interface ListMaterialsIn {
    mask?: BasicMaterialInfoMask;
    id_list?: BasicMaterialId[];
    builtin?: boolean;
    inorganic?: boolean;
    creatures?: boolean;
    plants?: boolean;
}

/**
 * Output structure for listing materials.
 */
export interface ListMaterialsOut {
    value?: BasicMaterialInfo[];
}

/**
 * Input structure for listing units.
 */
export interface ListUnitsIn {
    mask?: BasicUnitInfoMask;
    id_list?: number[];
    scan_all?: boolean;
    race?: number;
    civ_id?: number;
    dead?: boolean;
    alive?: boolean;
    sane?: boolean;
}

/**
 * Output structure for listing units.
 */
export interface ListUnitsOut {
    value?: BasicUnitInfo[];
}

/**
 * Input structure for listing squads.
 */
export interface ListSquadsIn {}

/**
 * Output structure for listing squads.
 */
export interface ListSquadsOut {
    value?: BasicSquadInfo[];
}

/**
 * Input structure for setting unit labors.
 */
export interface SetUnitLaborsIn {
    change?: UnitLaborState[];
}

/**
 * Representation of an Enum Item Name.
 */
export interface EnumItemName {
    value: number;
    name?: string;
    bit_size?: number; // Default: 1
}

/**
 * Job skill attributes.
 */
export interface JobSkillAttr {
    id: number;
    key: string;
    caption?: string;
    caption_noun?: string;
    profession?: number;
    labor?: number;
    type?: string;
}

/**
 * Profession attributes.
 */
export interface ProfessionAttr {
    id: number;
    key: string;
    caption?: string;
    military?: boolean;
    can_assign_labor?: boolean;
    parent?: number;
}

/**
 * Unit labor attributes.
 */
export interface UnitLaborAttr {
    id: number;
    key: string;
    caption?: string;
}

/**
 * Information about a name.
 */
export interface NameInfo {
    first_name?: string;
    nickname?: string;
    language_id?: number; // Default: -1
    last_name?: string;
    english_name?: string;
}

/**
 * Basic material identifier.
 */
export interface BasicMaterialId {
    type: number;
    index: number;
}

/**
 * Mask for filtering BasicMaterialInfo.
 */
export interface BasicMaterialInfoMask {
    states?: Array<'Solid' | 'Liquid' | 'Gas' | 'Powder' | 'Paste' | 'Pressed'>;
    temperature?: number; // Default: 10015
    flags?: boolean; // Default: false
    reaction?: boolean; // Default: false
}

/**
 * Detailed information about a basic material.
 */
export interface BasicMaterialInfo {
    type: number;
    index: number;
    token: string;
    flags?: number[];
    subtype?: number; // Default: -1
    creature_id?: number; // Default: -1
    plant_id?: number; // Default: -1
    histfig_id?: number; // Default: -1
    name_prefix?: string; // Default: ""
    state_color?: number[];
    state_name?: string[];
    state_adj?: string[];
    reaction_class?: string[];
    reaction_product?: Array<{
        id: string;
        type: number;
        index: number;
    }>;
    inorganic_flags?: number[];
}

/**
 * Mask for filtering BasicUnitInfo.
 */
export interface BasicUnitInfoMask {
    labors?: boolean; // Default: false
    skills?: boolean; // Default: false
    profession?: boolean; // Default: false
    misc_traits?: boolean; // Default: false
}

/**
 * Basic information about a unit.
 */
export interface BasicUnitInfo {
    unit_id: number;
    pos_x: number;
    pos_y: number;
    pos_z: number;
    name?: NameInfo;
    flags1: number;
    flags2: number;
    flags3: number;
    race: number;
    caste: number;
    gender?: number; // Default: -1
    civ_id?: number; // Default: -1
    histfig_id?: number; // Default: -1
    death_id?: number; // Default: -1
    death_flags?: number;
    squad_id?: number; // Default: -1
    squad_position?: number; // Default: -1
    profession?: number; // Default: -1
    custom_profession?: string;
    labors?: number[];
    skills?: SkillInfo[];
    misc_traits?: UnitMiscTrait[];
    curse?: UnitCurseInfo;
    burrows?: number[];
}

/**
 * Skill information for a unit.
 */
export interface SkillInfo {
    id: number;
    level: number;
    experience: number;
}

/**
 * Miscellaneous traits of a unit.
 */
export interface UnitMiscTrait {
    id: number;
    value: number;
}

/**
 * Curse information for a unit.
 */
export interface UnitCurseInfo {
    add_tags1: number;
    rem_tags1: number;
    add_tags2: number;
    rem_tags2: number;
    name?: NameTriple;
}

/**
 * Representation of a name triple.
 */
export interface NameTriple {
    normal: string;
    plural?: string;
    adjective?: string;
}

/**
 * Basic information about a squad.
 */
export interface BasicSquadInfo {
    squad_id: number;
    name?: NameInfo;
    alias?: string;
    members?: number[];
}

/**
 * Labor state of a unit.
 */
export interface UnitLaborState {
    unit_id: number;
    labor: number;
    value: boolean;
}
