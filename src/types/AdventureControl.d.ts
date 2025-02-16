/**
 * Type definitions converted from proto to TypeScript.
 */

/**
 * Enumeration for adventure mode menus.
 */
export enum AdvmodeMenu {
    Default = 0,
    Look = 1,
    ConversationAddress = 2,
    ConversationSelect = 3,
    ConversationSpeak = 4,
    Inventory = 5,
    Drop = 6,
    ThrowItem = 7,
    Wear = 8,
    Remove = 9,
    Interact = 10,
    Put = 11,
    PutContainer = 12,
    Eat = 13,
    ThrowAim = 14,
    Fire = 15,
    Get = 16,
    Unk17 = 17,
    CombatPrefs = 18,
    Companions = 19,
    MovementPrefs = 20,
    SpeedPrefs = 21,
    InteractAction = 22,
    MoveCarefully = 23,
    Announcements = 24,
    UseBuilding = 25,
    Travel = 26,
    Unk27 = 27,
    Unk28 = 28,
    SleepConfirm = 29,
    SelectInteractionTarget = 30,
    Unk31 = 31,
    Unk32 = 32,
    FallAction = 33,
    ViewTracks = 34,
    Jump = 35,
    Unk36 = 36,
    AttackConfirm = 37,
    AttackType = 38,
    AttackBodypart = 39,
    AttackStrike = 40,
    Unk41 = 41,
    Unk42 = 42,
    DodgeDirection = 43,
    Unk44 = 44,
    Unk45 = 45,
    Build = 46,
}

/**
 * Enumeration for careful movement types.
 */
export enum CarefulMovementType {
    DEFAULT_MOVEMENT = 0,
    RELEASE_ITEM_HOLD = 1,
    RELEASE_TILE_HOLD = 2,
    ATTACK_CREATURE = 3,
    HOLD_TILE = 4,
    MOVE = 5,
    CLIMB = 6,
    HOLD_ITEM = 7,
    BUILDING_INTERACT = 8,
    ITEM_INTERACT = 9,
    ITEM_INTERACT_GUIDE = 10,
    ITEM_INTERACT_RIDE = 11,
    ITEM_INTERACT_PUSH = 12,
}

/**
 * Enumeration for miscellaneous movement types.
 */
export enum MiscMoveType {
    SET_CLIMB = 0,
    SET_STAND = 1,
    SET_CANCEL = 2,
}

/**
 * Parameters for a move command.
 */
export interface MoveCommandParams {
    direction?: RemoteFortressReader.Coord; /* direction */
}

/**
 * Options for movement.
 */
export interface MovementOption {
    dest?: RemoteFortressReader.Coord; /* dest */
    source?: RemoteFortressReader.Coord; /* source */
    grab?: RemoteFortressReader.Coord; /* grab */
    movementType?: CarefulMovementType; /* movement_type */
}

/**
 * Contents of a menu.
 */
export interface MenuContents {
    currentMenu?: AdvmodeMenu; /* current_menu */
    movements?: MovementOption[]; /* movements */
}

/**
 * Parameters for a miscellaneous move command.
 */
export interface MiscMoveParams {
    type?: MiscMoveType; /* type */
}

/**
 * Coordinate structure (defined in RemoteFortressReader).
 */
export namespace RemoteFortressReader {
    export interface Coord {
        x?: number; /* x */
        y?: number; /* y */
        z?: number; /* z */
    }
}
