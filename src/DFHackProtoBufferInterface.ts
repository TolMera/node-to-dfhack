import { MenuContents, MiscMoveParams, MoveCommandParams } from './types/AdventureControl.js';
import { ListMaterialsIn, ListSquadsOut, GetWorldInfoOut, ListEnumsOut, ListJobSkillsOut, ListMaterialsOut, ListUnitsOut, ListUnitsIn, SetUnitLaborsIn, ListSquadsIn } from './types/BasicApi.js';
import { DFHackInterface } from './DFHackInterface.js';
import { SidebarCommand, SidebarState } from './types/DwarfControl.js';
import { root } from './initProtobuf.js';
import { EmbarkTile, MapReply, MapRequest, RawNames, TileRequest } from './types/isoworldremote.js';
import { BlockList, BlockRequest, BuildingList, CreatureRawList, DigCommand, Language, ListRequest, MapInfo, MaterialList, PlantList, PlantRawList, RegionMaps, ScreenCapture, SingleBool, Status, TiletypeList, UnitList, VersionInfo, ViewInfo, WorldMap } from './types/RemoteFortressReader.js';
import { CoreBindReply, CoreBindRequest, CoreRunCommandRequest, CoreRunLuaRequest, EmptyMessage, IntMessage, StringListMessage, StringMessage } from './types/CoreProtocol.js';
import { RenameBuildingIn, RenameSquadIn, RenameUnitIn } from './types/rename.js';

/**
 * Interface to interact with DFHack using Protobuf-defined RPC calls.
 */
export class DFHackProtoBufferInterface {
    df: DFHackInterface;
    private methodCache: Map<string, number>;

    constructor(dfInstance: DFHackInterface) {
        this.df = dfInstance;
        this.methodCache = new Map();
    }

    /**
     * Resolves or caches the method ID for a given method.
     * @param method - The name of the method to bind.
     * @param inputMsg - Input message type.
     * @param outputMsg - Output message type.
     * @param plugin - (Optional) The plugin to use.
     * @returns A promise resolving to the method ID.
     */
    private async resolveMethodId(method: string, inputMsg: string, outputMsg: string, plugin?: string): Promise<number> {
        if (plugin === "dfproto") plugin = "";
        // TODO: Fix types for input and all ignores
        // @ts-ignore
        const bindReply = await this.bindMethod({ method, inputMsg, outputMsg, plugin });
        // @ts-ignore
        this.methodCache.set(method, bindReply.assignedId);
        // @ts-ignore
        return bindReply.assignedId;
    }

    private async _genericQueryMethod(inType: string, outType: string, method: string, plugin: string, input: unknown = {}):Promise<unknown> {
        const inputMethod = root.lookupType(inType.split('.')[1]);
        const outputMethod = root.lookupType(outType.split('.')[1]);

        const methodId = await this.resolveMethodId(method, inType, outType, plugin);

        // @ts-ignore
        const buffer = inputMethod.encode(inputMethod.create(input)).finish();
        const header = this.df.createHeader(methodId, buffer.length);

        // @ts-ignore
        return outputMethod.decode(await this.df.write(Buffer.concat([header, buffer])));
    }

    /**
     * Sends a CoreBindRequest to bind a method.
     * @param method - The name of the method to bind.
     * @param inputMsg - Input message type.
     * @param outputMsg - Output message type.
     * @param plugin - (Optional) The plugin to use.
     * @returns A promise resolving to the CoreBindReply message.
     */
    async bindMethod(input: CoreBindRequest): Promise<CoreBindReply> {
        const inType = 'CoreBindRequest';
        const outType = 'CoreBindReply';
        const bindMethodId = 0;

        const inputMethod = root.lookupType(inType);
        const outputMethod = root.lookupType(outType);

        const buffer = inputMethod.encode(inputMethod.create(input)).finish();
        const header = this.df.createHeader(bindMethodId, buffer.length);

        // @ts-ignore
        return outputMethod.decode(await this.df.write(Buffer.concat([header, buffer])));
    }

    /**
     * Sends a CoreRunCommandRequest to execute a DFHack command.
     * @param command - The command to run.
     * @param args - An array of arguments for the command.
     * @returns A promise that resolves to an empty response.
     */
    async runCommand(input: CoreRunCommandRequest): Promise<EmptyMessage> {
        const inType = 'dfproto.CoreRunCommandRequest';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "dfproto";
        const method = "RunCommand";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * Suspends the DFHack core.
     * @returns A promise that resolves to an integer message.
     */
    async coreSuspend(): Promise<IntMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.IntMessage';
        const plugin = "dfproto";
        const method = "CoreSuspend";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Resumes the DFHack core.
     * @returns A promise that resolves to an integer message.
     */
    async coreResume(): Promise<IntMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.IntMessage';
        const plugin = "dfproto";
        const method = "CoreResume";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Executes a Lua function through DFHack.
     * @param module - The Lua module name.
     * @param func - The Lua function name.
     * @param args - An array of arguments for the Lua function.
     * @returns A promise resolving to a list of strings returned by the Lua function.
     */
    async runLua(input: CoreRunLuaRequest): Promise<StringListMessage> {
        const inType = 'dfproto.CoreRunLuaRequest';
        const outType = 'dfproto.StringListMessage';
        const plugin = "dfproto";
        const method = "RunLua";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC SetPauseState : SingleBool -> EmptyMessage
     * Sets the pause state of the game.
     * @param value - True to pause the game, false to unpause.
     * @returns A promise resolving to an empty message.
     */
    async setPauseState(input: SingleBool): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.SingleBool';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "SetPauseState";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetPauseState : EmptyMessage -> SingleBool
     * Gets the current pause state of the game.
     * @returns A promise resolving to the pause state (true or false).
     */
    async getPauseState(): Promise<SingleBool> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.SingleBool';
        const plugin = "RemoteFortressReader";
        const method = "GetPauseState";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Checks the validity of the current game state.
     * @returns A promise resolving to a boolean indicating game validity.
     */
    async getGameValidity(): Promise<SingleBool> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.SingleBool';
        const plugin = "RemoteFortressReader";
        const method = "GetGameValidity";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Gets the current version of DFHack.
     * @returns A promise resolving to the version string.
     */
    async getVersion(): Promise<StringMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.StringMessage';
        const plugin = "dfproto";
        const method = "GetVersion";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Gets the current version of DFHack from RemoteFortressReader
     * @returns A promise resolving to the version string.
     */
    async getVersion_RemoteFortressReader(): Promise<VersionInfo> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.VersionInfo';
        const plugin = "RemoteFortressReader";
        const method = "GetVersion";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Gets the current version of Dwarf Fortress.
     * @returns A promise resolving to the version string.
     */
    async getDFVersion(): Promise<StringMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.StringMessage';
        const plugin = "dfproto";
        const method = "GetDFVersion";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Fetches the list of units.
     * @param inParams - The parameters to filter units by, including masks and filters.
     * @returns A promise resolving to an array of units.
     */
    async listUnits(input: ListUnitsIn): Promise<ListUnitsOut> {
        const inType = 'dfproto.ListUnitsIn';
        const outType = 'dfproto.ListUnitsOut';
        const plugin = "dfproto";
        const method = "ListUnits";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * Sets the labor state for units.
     * @returns A promise resolving to an empty message.
     */
    async SetUnitLabors(input: SetUnitLaborsIn): Promise<EmptyMessage> {
        const inType = 'dfproto.SetUnitLaborsIn';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "dfproto";
        const method = "SetUnitLabors";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * Fetches the list of squads from DFHack.
     * @returns A promise resolving to the list of squads.
     */
    async listSquads(input: ListSquadsIn): Promise<ListSquadsOut> {
        const inType = 'dfproto.ListSquadsIn';
        const outType = 'dfproto.ListSquadsOut';
        const plugin = 'dfproto';
        const method = "ListSquads";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    // T1955
    /**
     * Checks hash validity.
     * @returns A promise resolving to an empty message.
     */
    async checkHashes(): Promise<EmptyMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.EmptyMessage';
        const plugin = 'RemoteFortressReader';
        const method = "CheckHashes";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Copies the current screen.
     * @returns A promise resolving to a ScreenCapture message.
     */
    async copyScreen(): Promise<ScreenCapture> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.ScreenCapture';
        const plugin = "RemoteFortressReader";
        const method = "CopyScreen";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * Gets the list of building definitions.
     * @returns A promise resolving to a BuildingList message.
     */
    async getBuildingDefList(): Promise<BuildingList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.BuildingList';
        const plugin = "RemoteFortressReader";
        const method = "GetBuildingDefList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    // T1957
    /**
     * RPC GetCreatureRaws : EmptyMessage -> CreatureRawList
     * Gets the creature raws.
     * @returns A promise resolving to a CreatureRawList message.
     */
    async getCreatureRaws(): Promise<CreatureRawList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.CreatureRawList';
        const plugin = "RemoteFortressReader";
        const method = "GetCreatureRaws";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * RPC GetGrowthList : EmptyMessage -> MaterialList
     * Gets the list of growths.
     * @returns A promise resolving to a MaterialList message.
     */
    async getGrowthList(): Promise<MaterialList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.MaterialList';
        const plugin = "RemoteFortressReader";
        const method = "GetGrowthList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * RPC GetItemList : EmptyMessage -> MaterialList
     * Gets the list of items.
     * @returns A promise resolving to a MaterialList message.
     */
    async getItemList(): Promise<EmptyMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "MaterialList";
        const method = "GetItemList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetLanguage : EmptyMessage -> Language
     * Gets the language data.
     * @returns A promise resolving to a Language message.
     */
    async getLanguage(): Promise<Language> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.Language';
        const plugin = "RemoteFortressReader";
        const method = "GetLanguage";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetMapInfo : EmptyMessage -> MapInfo
     * Gets map information.
     * @returns A promise resolving to a MapInfo message.
     */
    async getMapInfo(): Promise<MapInfo> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.MapInfo';
        const plugin = "RemoteFortressReader";
        const method = "GetMapInfo";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetMaterialList : EmptyMessage -> MaterialList
     * Gets the material list.
     * @returns A promise resolving to a MaterialList message.
     */
    async getMaterialList(): Promise<MaterialList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.MaterialList';
        const plugin = "RemoteFortressReader";
        const method = "GetMaterialList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetPlantRaws : EmptyMessage -> PlantRawList
     * Gets the plant raws.
     * @returns A promise resolving to a PlantRawList message.
     */
    async getPlantRaws(): Promise<PlantRawList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.PlantRawList';
        const plugin = "RemoteFortressReader";
        const method = "GetPlantRaws";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    // T2000

    /**
     * // RPC GetRegionMaps : EmptyMessage -> RegionMaps
     * Gets the region maps.
     * @returns A promise resolving to a RegionMaps message.
     */
    async getRegionMaps(): Promise<RegionMaps> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.RegionMaps';
        const plugin = "RemoteFortressReader";
        const method = "GetRegionMaps";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetRegionMapsNew : EmptyMessage -> RegionMaps
     * Gets the new region maps.
     * @returns A promise resolving to a RegionMaps message.
     */
    async getRegionMapsNew(): Promise<RegionMaps> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.RegionMaps';
        const plugin = "RemoteFortressReader";
        const method = "GetRegionMapsNew";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetReports : EmptyMessage -> Status
     * Gets the game reports.
     * @returns A promise resolving to a Status message.
     */
    async getReports(): Promise<Status> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.Status';
        const plugin = "RemoteFortressReader";
        const method = "GetReports";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetSideMenu : EmptyMessage -> SidebarState
     * Gets the sidebar menu state.
     * @returns A promise resolving to a SidebarState message.
     */
    async getSideMenu(): Promise<SidebarState> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.SidebarState';
        const plugin = "RemoteFortressReader";
        const method = "GetSideMenu";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetTiletypeList : EmptyMessage -> TiletypeList
     * Gets the tiletype list.
     * @returns A promise resolving to a TiletypeList message.
     */
    async getTiletypeList(): Promise<TiletypeList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.TiletypeList';
        const plugin = "RemoteFortressReader";
        const method = "GetTiletypeList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetUnitList : EmptyMessage -> UnitList
     * Gets the unit list.
     * @returns A promise resolving to a UnitList message.
     */
    async getUnitList(): Promise<UnitList> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.UnitList';
        const plugin = "RemoteFortressReader";
        const method = "GetUnitList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetVersionInfo : EmptyMessage -> VersionInfo
     * Gets version information.
     * @returns A promise resolving to a VersionInfo message.
     */
    async getVersionInfo(): Promise<VersionInfo> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.VersionInfo';
        const plugin = "RemoteFortressReader";
        const method = "GetVersionInfo";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetViewInfo : EmptyMessage -> ViewInfo
     * Gets view information.
     * @returns A promise resolving to a ViewInfo message.
     */
    async getViewInfo(): Promise<ViewInfo> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.ViewInfo';
        const plugin = "RemoteFortressReader";
        const method = "GetViewInfo";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetWorldInfo : EmptyMessage -> GetWorldInfoOut
     * Gets world information.
     * @returns A promise resolving to a GetWorldInfoOut message.
     */
    async getWorldInfo(): Promise<GetWorldInfoOut> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.GetWorldInfoOut';
        const plugin = "dfproto";
        const method = "GetWorldInfo";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetWorldMap : EmptyMessage -> WorldMap
     * Gets the world map.
     * @returns A promise resolving to a WorldMap message.
     */
    async getWorldMap(): Promise<WorldMap> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.WorldMap';
        const plugin = "RemoteFortressReader";
        const method = "GetWorldMap";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetWorldMapCenter : EmptyMessage -> WorldMap
     * Gets the world map center.
     * @returns A promise resolving to a WorldMap message.
     */
    async getWorldMapCenter(): Promise<WorldMap> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.WorldMap';
        const plugin = "RemoteFortressReader";
        const method = "GetWorldMapCenter";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC GetWorldMapNew : EmptyMessage -> WorldMap
     * Gets the new world map.
     * @returns A promise resolving to a WorldMap message.
     */
    async getWorldMapNew(): Promise<WorldMap> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.WorldMap';
        const plugin = "RemoteFortressReader";
        const method = "GetWorldMapNew";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * RPC ListEnums : EmptyMessage -> ListEnumsOut
     * Lists all enums.
     * @returns A promise resolving to a ListEnumsOut message.
     */
    async listEnums(): Promise<ListEnumsOut> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.ListEnumsOut';
        const plugin = "dfproto";
        const method = "ListEnums";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC ListJobSkills : EmptyMessage -> ListJobSkillsOut
     * Lists all job skills.
     * @returns A promise resolving to a ListJobSkillsOut message.
     */
    async listJobSkills(): Promise<ListJobSkillsOut> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.ListJobSkillsOut';
        const plugin = "dfproto";
        const method = "ListJobSkills";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC MenuQuery : EmptyMessage -> MenuContents
     * Queries the current menu contents.
     * @returns A promise resolving to a MenuContents message.
     */
    async menuQuery(): Promise<MenuContents> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'RemoteFortressReader.MenuContents';
        const plugin = "RemoteFortressReader";
        const method = "MenuQuery";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC ResetMapHashes : EmptyMessage -> EmptyMessage
     * Resets the map hashes.
     * @returns A promise resolving to an empty message.
     */
    async resetMapHashes(): Promise<EmptyMessage> {
        const inType = 'dfproto.EmptyMessage';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "ResetMapHashes";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin);
    }

    /**
     * // RPC JumpCommand : MoveCommandParams -> EmptyMessage
     * Executes a JumpCommand.
     * @param params - Parameters for the JumpCommand.
     * @returns A promise resolving to an empty message.
     */
    async jumpCommand(input: MoveCommandParams): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.MoveCommandParams';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "JumpCommand";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC MiscMoveCommand : MiscMoveParams -> EmptyMessage
     * Executes a MiscMoveCommand.
     * @param params - Parameters for the MiscMoveCommand.
     * @returns A promise resolving to an empty message.
     */
    async miscMoveCommand(input: MiscMoveParams): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.MiscMoveParams';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "MiscMoveCommand";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC MoveCommand : MoveCommandParams -> EmptyMessage
     * Executes a MoveCommand.
     * @param params - Parameters for the MoveCommand.
     * @returns A promise resolving to an empty message.
     */
    async moveCommand(input: MoveCommandParams): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.MoveCommandParams';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "SetUnitLabors";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC MovementSelectCommand : IntMessage -> EmptyMessage
     * Executes a MovementSelectCommand.
     * @param params - An integer message.
     * @returns A promise resolving to an empty message.
     */
    async movementSelectCommand(input: IntMessage): Promise<EmptyMessage> {
        const inType = 'dfproto.IntMessage';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "MovementSelectCommand";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC PassKeyboardEvent : KeyboardEvent -> EmptyMessage
     * Passes a keyboard event.
     * @param event - The keyboard event.
     * @returns A promise resolving to an empty message.
     */
    async passKeyboardEvent(input: KeyboardEvent): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.KeyboardEvent';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "PassKeyboardEvent";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC RenameBuilding : RenameBuildingIn -> EmptyMessage
     * Renames a building.
     * @param params - Parameters for renaming a building.
     * @returns A promise resolving to an empty message.
     */
    async renameBuilding(input: RenameBuildingIn): Promise<EmptyMessage> {
        const inType = 'rename.RenameBuildingIn';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "rename";
        const method = "RenameBuilding";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC RenameSquad : RenameSquadIn -> EmptyMessage
     * Renames a squad.
     * @param params - Parameters for renaming a squad.
     * @returns A promise resolving to an empty message.
     */
    async renameSquad(input: RenameSquadIn): Promise<EmptyMessage> {
        const inType = 'rename.RenameSquadIn';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "rename";
        const method = "RenameSquad";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC RenameUnit : RenameUnitIn -> EmptyMessage
     * Renames a unit.
     * @param params - Parameters for renaming a unit.
     * @returns A promise resolving to an empty message.
     */
    async renameUnit(input: RenameUnitIn): Promise<EmptyMessage> {
        const inType = 'rename.RenameUnitIn';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "rename";
        const method = "RenameUnit";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC SendDigCommand : DigCommand -> EmptyMessage
     * Sends a dig command.
     * @param params - Parameters for the dig command.
     * @returns A promise resolving to an empty message.
     */
    async sendDigCommand(input: DigCommand): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.DigCommand';
        const outType = 'dfproto.EmptyMessage';
        const plugin = "RemoteFortressReader";
        const method = "SendDigCommand";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC SetSideMenu : SidebarCommand -> EmptyMessage
     * Sets the side menu.
     * @param params - Parameters for the sidebar command.
     * @returns A promise resolving to an empty message.
     */
    async setSideMenu(input: SidebarCommand): Promise<EmptyMessage> {
        const inType = 'RemoteFortressReader.SidebarCommand';
        const outType = 'dfproto.EmptyMessage';
        const plugin = 'RemoteFortressReader';
        const method = "SetSideMenu";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetBlockList : BlockRequest -> BlockList
     * Executes a GetBlockList RPC.
     * @param params - Parameters for the BlockRequest.
     * @returns A promise resolving to a BlockList message.
     */
    async getBlockList(input: BlockRequest): Promise<BlockList> {
        const inType = 'RemoteFortressReader.BlockRequest';
        const outType = 'RemoteFortressReader.BlockList';
        const plugin = "RemoteFortressReader";
        const method = "GetBlockList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetEmbarkInfo : MapRequest -> MapReply
     * Executes a GetEmbarkInfo RPC.
     * @param params - Parameters for the MapRequest.
     * @returns A promise resolving to a MapReply message.
     */
    async getEmbarkInfo(input: MapRequest): Promise<MapReply> {
        const inType = 'isoworldremote.MapRequest';
        const outType = 'isoworldremote.MapReply';
        const plugin = "isoworldremote";
        const method = "GetEmbarkInfo";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetEmbarkTile : TileRequest -> EmbarkTile
     * Executes a GetEmbarkTile RPC.
     * @param params - Parameters for the TileRequest.
     * @returns A promise resolving to an EmbarkTile message.
     */
    async getEmbarkTile(input: TileRequest): Promise<EmbarkTile> {
        const inType = 'isoworldremote.TileRequest';
        const outType = 'isoworldremote.EmbarkTile';
        const plugin = "isoworldremote";
        const method = "GetEmbarkTile";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetPartialCreatureRaws : ListRequest -> CreatureRawList
     * Executes a GetPartialCreatureRaws RPC.
     * @param params - Parameters for the ListRequest.
     * @returns A promise resolving to a CreatureRawList message.
     */
    async getPartialCreatureRaws(input: ListRequest): Promise<CreatureRawList> {
        const inType = 'RemoteFortressReader.ListRequest';
        const outType = 'RemoteFortressReader.CreatureRawList';
        const plugin = "RemoteFortressReader";
        const method = "GetPartialCreatureRaws";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetPartialPlantRaws : ListRequest -> PlantRawList
     * Executes a GetPartialPlantRaws RPC.
     * @param params - Parameters for the ListRequest.
     * @returns A promise resolving to a PlantRawList message.
     */
    async getPartialPlantRaws(input: ListRequest): Promise<PlantRawList> {
        const inType = 'RemoteFortressReader.ListRequest';
        const outType = 'RemoteFortressReader.PlantRawList';
        const plugin = "RemoteFortressReader";
        const method = "GetPartialPlantRaws";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetPlantList : BlockRequest -> PlantList
     * Executes a GetPlantList RPC.
     * @param params - Parameters for the BlockRequest.
     * @returns A promise resolving to a PlantList message.
     */
    async getPlantList(input: BlockRequest): Promise<PlantList> {
        const inType = 'RemoteFortressReader.BlockRequest';
        const outType = 'RemoteFortressReader.PlantList';
        const plugin = "RemoteFortressReader";
        const method = "GetPlantList";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetRawNames : MapRequest -> RawNames
     * Executes a GetRawNames RPC.
     * @param params - Parameters for the MapRequest.
     * @returns A promise resolving to a RawNames message.
     */
    async getRawNames(input: MapRequest): Promise<RawNames> {
        const inType = 'isoworldremote.MapRequest';
        const outType = 'isoworldremote.RawNames';
        const plugin = "isoworldremote";
        const method = "GetRawNames";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC GetUnitListInside : BlockRequest -> UnitList
     * Executes a GetUnitListInside RPC.
     * @param params - Parameters for the BlockRequest.
     * @returns A promise resolving to a UnitList message.
     */
    async getUnitListInside(input: BlockRequest): Promise<UnitList> {
        const inType = 'RemoteFortressReader.BlockRequest';
        const outType = 'RemoteFortressReader.UnitList';
        const plugin = "RemoteFortressReader";
        const method = "GetUnitListInside";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }

    /**
     * // RPC ListMaterials : ListMaterialsIn -> ListMaterialsOut
     * Executes a ListMaterials RPC.
     * @param params - Parameters for the ListMaterialsIn.
     * @returns A promise resolving to a ListMaterialsOut message.
     */
    async listMaterials(input: ListMaterialsIn): Promise<ListMaterialsOut> {
        const inType = 'dfproto.ListMaterialsIn';
        const outType = 'dfproto.ListMaterialsOut';
        const plugin = "dfproto";
        const method = "ListMaterials";

        // @ts-ignore
        return await this._genericQueryMethod(inType, outType, method, plugin, input);
    }
}
