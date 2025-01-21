/**
 * TypeScript type definitions for DwarfControl.
 */

/**
 * Enumeration for build categories.
 */
export enum BuildCategory {
    NotCategory = 0,
    SiegeEngines = 1,
    Traps = 2,
    Workshops = 3,
    Furnaces = 4,
    Constructions = 5,
    MachineComponents = 6,
    Track = 7,
}

/**
 * Enumeration for menu actions.
 */
export enum MenuAction {
    MenuNone = 0,
    MenuSelect = 1,
    MenuCancel = 2,
    MenuSelectAll = 3,
}

/**
 * Enumeration for build selector stages.
 */
export enum BuildSelectorStage {
    StageNoMat = 0,
    StagePlace = 1,
    StageItemSelect = 2,
}

/**
 * State of the sidebar.
 */
export interface SidebarState {
    mode?: proto.enums.ui_sidebar_mode.ui_sidebar_mode; /* mode */
    menuItems?: MenuItem[]; /* menu_items */
    buildSelector?: BuildSelector; /* build_selector */
}

/**
 * Representation of a menu item.
 */
export interface MenuItem {
    buildingType?: RemoteFortressReader.BuildingType; /* building_type */
    existingCount?: number; /* existing_count */
    buildCategory?: BuildCategory; /* build_category */
}

/**
 * Command for the sidebar.
 */
export interface SidebarCommand {
    mode?: proto.enums.ui_sidebar_mode.ui_sidebar_mode; /* mode */
    menuIndex?: number; /* menu_index */
    action?: MenuAction; /* action */
    selectionCoord?: RemoteFortressReader.Coord; /* selection_coord */
}

/**
 * Representation of a build requirement choice.
 */
export interface BuiildReqChoice {
    distance?: number; /* distance */
    name?: string; /* name */
    numCandidates?: number; /* num_candidates */
    usedCount?: number; /* used_count */
}

/**
 * Representation of a build item requirement.
 */
export interface BuildItemReq {
    countRequired?: number; /* count_required */
    countMax?: number; /* count_max */
    countProvided?: number; /* count_provided */
}

/**
 * Representation of the build selector.
 */
export interface BuildSelector {
    buildingType?: RemoteFortressReader.BuildingType; /* building_type */
    stage?: BuildSelectorStage; /* stage */
    choices?: BuiildReqChoice[]; /* choices */
    selIndex?: number; /* sel_index */
    requirements?: BuildItemReq[]; /* requirements */
    reqIndex?: number; /* req_index */
    errors?: string[]; /* errors */
    radiusXLow?: number; /* radius_x_low */
    radiusYLow?: number; /* radius_y_low */
    radiusXHigh?: number; /* radius_x_high */
    radiusYHigh?: number; /* radius_y_high */
    cursor?: RemoteFortressReader.Coord; /* cursor */
    tiles?: number[]; /* tiles */
}
