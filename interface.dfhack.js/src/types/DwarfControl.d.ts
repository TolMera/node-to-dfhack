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
    mode?: proto.enums.ui_sidebar_mode.ui_sidebar_mode;
    menu_items?: MenuItem[];
    build_selector?: BuildSelector;
}

/**
 * Representation of a menu item.
 */
export interface MenuItem {
    building_type?: RemoteFortressReader.BuildingType;
    existing_count?: number;
    build_category?: BuildCategory;
}

/**
 * Command for the sidebar.
 */
export interface SidebarCommand {
    mode?: proto.enums.ui_sidebar_mode.ui_sidebar_mode;
    menu_index?: number;
    action?: MenuAction;
    selection_coord?: RemoteFortressReader.Coord;
}

/**
 * Representation of a build requirement choice.
 */
export interface BuiildReqChoice {
    distance?: number;
    name?: string;
    num_candidates?: number;
    used_count?: number;
}

/**
 * Representation of a build item requirement.
 */
export interface BuildItemReq {
    count_required?: number;
    count_max?: number;
    count_provided?: number;
}

/**
 * Representation of the build selector.
 */
export interface BuildSelector {
    building_type?: RemoteFortressReader.BuildingType;
    stage?: BuildSelectorStage;
    choices?: BuiildReqChoice[];
    sel_index?: number;
    requirements?: BuildItemReq[];
    req_index?: number;
    errors?: string[];
    radius_x_low?: number;
    radius_y_low?: number;
    radius_x_high?: number;
    radius_y_high?: number;
    cursor?: RemoteFortressReader.Coord;
    tiles?: number[];
}
