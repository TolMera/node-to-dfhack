import { DFHackInterface } from './DFHackInterface.js';
import { DFHackProtoBufferInterface } from './DFHackProtoBufferInterface.js';

const df = new DFHackInterface();
df.connect();
df.connected?.then(
    async (data) => {
        console.log('Connected:', data.toString());

        const instance = new DFHackProtoBufferInterface(df);

        console.log(instance.coreSuspend); await instance.coreSuspend().then(console.log).catch(console.error);
        console.log(instance.coreResume); await instance.coreResume().then(console.log).catch(console.error);
        console.log(instance.getPauseState); await instance.getPauseState().then(console.log).catch(console.error);
        console.log(instance.getGameValidity); await instance.getGameValidity().then(console.log).catch(console.error);
        console.log(instance.getVersion); await instance.getVersion().then(console.log).catch(console.error);
        // console.log(instance.getVersion_RemoteFortressReader); await instance.getVersion_RemoteFortressReader().then(console.log).catch(console.error);
        console.log(instance.getDFVersion); await instance.getDFVersion().then(console.log).catch(console.error);
        console.log(instance.checkHashes); await instance.checkHashes().then(console.log).catch(console.error);
        // console.log(instance.copyScreen); await instance.copyScreen().then(console.log).catch(console.error);
        console.log(instance.getBuildingDefList); await instance.getBuildingDefList().then(console.log).catch(console.error);
        // console.log(instance.getCreatureRaws); await instance.getCreatureRaws().then(console.log).catch(console.error);
        // console.log(instance.getGrowthList); await instance.getGrowthList().then(console.log).catch(console.error);
        console.log(instance.getItemList); await instance.getItemList().then(console.log).catch(console.error);
        console.log(instance.getLanguage); await instance.getLanguage().then(console.log).catch(console.error);
        console.log(instance.getMapInfo); await instance.getMapInfo().then(console.log).catch(console.error);
        // console.log(instance.getMaterialList); await instance.getMaterialList().then(console.log).catch(console.error);
        console.log(instance.getPlantRaws); await instance.getPlantRaws().then(console.log).catch(console.error);
        // console.log(instance.getRegionMaps); await instance.getRegionMaps().then(console.log).catch(console.error);
        console.log(instance.getRegionMapsNew); await instance.getRegionMapsNew().then(console.log).catch(console.error);
        console.log(instance.getReports); await instance.getReports().then(console.log).catch(console.error);
        // console.log(instance.getSideMenu); await instance.getSideMenu().then(console.log).catch(console.error);
        console.log(instance.getTiletypeList); await instance.getTiletypeList().then(console.log).catch(console.error);
        console.log(instance.getUnitList); await instance.getUnitList().then(console.log).catch(console.error);
        console.log(instance.getVersionInfo); await instance.getVersionInfo().then(console.log).catch(console.error);
        console.log(instance.getViewInfo); await instance.getViewInfo().then(console.log).catch(console.error);
        console.log(instance.getWorldInfo); await instance.getWorldInfo().then(console.log).catch(console.error);
        console.log(instance.getWorldMap); await instance.getWorldMap().then(console.log).catch(console.error);
        console.log(instance.getWorldMapCenter); await instance.getWorldMapCenter().then(console.log).catch(console.error);
        console.log(instance.getWorldMapNew); await instance.getWorldMapNew().then(console.log).catch(console.error);
        console.log(instance.listEnums); await instance.listEnums().then(console.log).catch(console.error);
        console.log(instance.listJobSkills); await instance.listJobSkills().then(console.log).catch(console.error);
        console.log(instance.menuQuery); await instance.menuQuery().then(console.log).catch(console.error);
        console.log(instance.resetMapHashes); await instance.resetMapHashes().then(console.log).catch(console.error);

        process.exit();
    }
);
