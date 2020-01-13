import mpa from '@mpfe/mpa';
import routeMaps from '../model/routeMaps';
import { Model } from '@mpfe/mpa/lib/type';



function createModels(models: Array<Function>, dataProvider): Array<Model> {
    return models.map(model => model(dataProvider))
}



const coreStore = mpa();
coreStore.useModel(routeMaps())
coreStore.run();
export { coreStore, createModels };



