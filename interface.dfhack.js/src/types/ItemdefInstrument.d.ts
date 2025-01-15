/**
 * TypeScript type definitions for ItemdefInstrument.
 */

/**
 * Flags representing instrument properties.
 */
export interface InstrumentFlags {
    indefinite_pitch?: boolean;
    placed_as_building?: boolean;
    metal_mat?: boolean;
    stone_mat?: boolean;
    wood_mat?: boolean;
    glass_mat?: boolean;
    ceramic_mat?: boolean;
    shell_mat?: boolean;
    bone_mat?: boolean;
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
    type?: string;
    id?: string;
    name?: string;
    name_plural?: string;
}

/**
 * Representation of an instrument register.
 */
export interface InstrumentRegister {
    pitch_range_min?: number;
    pitch_range_max?: number;
}

/**
 * Definition of an instrument.
 */
export interface InstrumentDef {
    flags?: InstrumentFlags;
    size?: number;
    value?: number;
    material_size?: number;
    pieces?: InstrumentPiece[];
    pitch_range_min?: number;
    pitch_range_max?: number;
    volume_mb_min?: number;
    volume_mb_max?: number;
    sound_production?: SoundProductionType[];
    sound_production_parm1?: string[];
    sound_production_parm2?: string[];
    pitch_choice?: PitchChoiceType[];
    pitch_choice_parm1?: string[];
    pitch_choice_parm2?: string[];
    tuning?: TuningType[];
    tuning_parm?: string[];
    registers?: InstrumentRegister[];
    description?: string;
}
