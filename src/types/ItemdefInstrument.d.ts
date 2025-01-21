/**
 * TypeScript type definitions for ItemdefInstrument.
 */

/**
 * Flags representing instrument properties.
 */
export interface InstrumentFlags {
    indefinitePitch?: boolean; /* indefinite_pitch */
    placedAsBuilding?: boolean; /* placed_as_building */
    metalMat?: boolean; /* metal_mat */
    stoneMat?: boolean; /* stone_mat */
    woodMat?: boolean; /* wood_mat */
    glassMat?: boolean; /* glass_mat */
    ceramicMat?: boolean; /* ceramic_mat */
    shellMat?: boolean; /* shell_mat */
    boneMat?: boolean; /* bone_mat */
}

/**
 * Enumeration for pitch choice types.
 */
export enum PitchChoiceType {
    MEMBRANE_POSITION = 0,
    SUBPART_CHOICE = 1,
    KEYBOARD = 2,
    STOPPING_FRET = 3,
    STOPPING_AGAINST_BODY = 4,
    STOPPING_HOLE = 5,
    STOPPING_HOLE_KEY = 6,
    SLIDE = 7,
    HARMONIC_SERIES = 8,
    VALVE_ROUTES_AIR = 9,
    BP_IN_BELL = 10,
    FOOT_PEDALS = 11,
}

/**
 * Enumeration for sound production types.
 */
export enum SoundProductionType {
    PLUCKED_BY_BP = 0,
    PLUCKED = 1,
    BOWED = 2,
    STRUCK_BY_BP = 3,
    STRUCK = 4,
    VIBRATE_BP_AGAINST_OPENING = 5,
    BLOW_AGAINST_FIPPLE = 6,
    BLOW_OVER_OPENING_SIDE = 7,
    BLOW_OVER_OPENING_END = 8,
    BLOW_OVER_SINGLE_REED = 9,
    BLOW_OVER_DOUBLE_REED = 10,
    BLOW_OVER_FREE_REED = 11,
    STRUCK_TOGETHER = 12,
    SHAKEN = 13,
    SCRAPED = 14,
    FRICTION = 15,
    RESONATOR = 16,
    BAG_OVER_REED = 17,
    AIR_OVER_REED = 18,
    AIR_OVER_FREE_REED = 19,
    AIR_AGAINST_FIPPLE = 20,
}

/**
 * Enumeration for tuning types.
 */
export enum TuningType {
    PEGS = 0,
    ADJUSTABLE_BRIDGES = 1,
    CROOKS = 2,
    TIGHTENING = 3,
    LEVERS = 4,
}

/**
 * Representation of an instrument piece.
 */
export interface InstrumentPiece {
    type?: string; /* type */
    id?: string; /* id */
    name?: string; /* name */
    namePlural?: string; /* name_plural */
}

/**
 * Representation of an instrument register.
 */
export interface InstrumentRegister {
    pitchRangeMin?: number; /* pitch_range_min */
    pitchRangeMax?: number; /* pitch_range_max */
}

/**
 * Definition of an instrument.
 */
export interface InstrumentDef {
    flags?: InstrumentFlags; /* flags */
    size?: number; /* size */
    value?: number; /* value */
    materialSize?: number; /* material_size */
    pieces?: InstrumentPiece[]; /* pieces */
    pitchRangeMin?: number; /* pitch_range_min */
    pitchRangeMax?: number; /* pitch_range_max */
    volumeMbMin?: number; /* volume_mb_min */
    volumeMbMax?: number; /* volume_mb_max */
    soundProduction?: SoundProductionType[]; /* sound_production */
    soundProductionParm1?: string[]; /* sound_production_parm1 */
    soundProductionParm2?: string[]; /* sound_production_parm2 */
    pitchChoice?: PitchChoiceType[]; /* pitch_choice */
    pitchChoiceParm1?: string[]; /* pitch_choice_parm1 */
    pitchChoiceParm2?: string[]; /* pitch_choice_parm2 */
    tuning?: TuningType[]; /* tuning */
    tuningParm?: string[]; /* tuning_parm */
    registers?: InstrumentRegister[]; /* registers */
    description?: string; /* description */
}
