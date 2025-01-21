/**
 * TypeScript type definitions for dfproto Core.
 */

/**
 * Representation of a core text fragment.
 */
export interface CoreTextFragment {
    text: string; /* text */
    color?: /* color */
        | 'COLOR_BLACK'
        | 'COLOR_BLUE'
        | 'COLOR_GREEN'
        | 'COLOR_CYAN'
        | 'COLOR_RED'
        | 'COLOR_MAGENTA'
        | 'COLOR_BROWN'
        | 'COLOR_GREY'
        | 'COLOR_DARKGREY'
        | 'COLOR_LIGHTBLUE'
        | 'COLOR_LIGHTGREEN'
        | 'COLOR_LIGHTCYAN'
        | 'COLOR_LIGHTRED'
        | 'COLOR_LIGHTMAGENTA'
        | 'COLOR_YELLOW'
        | 'COLOR_WHITE';
}

/**
 * Notification containing core text fragments.
 */
export interface CoreTextNotification {
    fragments: CoreTextFragment[]; /* fragments */
}

/**
 * Representation of a core error notification.
 */
export interface CoreErrorNotification {
    code: /* code */
        | 'CR_LINK_FAILURE'
        | 'CR_WOULD_BREAK'
        | 'CR_NOT_IMPLEMENTED'
        | 'CR_OK'
        | 'CR_FAILURE'
        | 'CR_WRONG_USAGE'
        | 'CR_NOT_FOUND';
}

/**
 * Empty message.
 */
export interface EmptyMessage {}

/**
 * Integer message.
 */
export interface IntMessage {
    value: number; /* value */
}

/**
 * List of integers.
 */
export interface IntListMessage {
    value: number[]; /* value */
}

/**
 * String message.
 */
export interface StringMessage {
    value: string; /* value */
}

/**
 * List of strings.
 */
export interface StringListMessage {
    value: string[]; /* value */
}

/**
 * Request to bind a core method.
 */
export interface CoreBindRequest {
    method: string; /* method */
    inputMsg: string; /* input_msg */
    outputMsg: string; /* output_msg */
    plugin?: string; /* plugin */
}

/**
 * Reply to a core bind request.
 */
export interface CoreBindReply {
    assignedId: number; /* assigned_id */
}

/**
 * Request to run a core command.
 */
export interface CoreRunCommandRequest {
    command: string; /* command */
    arguments: string[]; /* arguments */
}

/**
 * Request to run a Lua function.
 */
export interface CoreRunLuaRequest {
    module: string; /* module */
    function: string; /* function */
    arguments: string[]; /* arguments */
}
