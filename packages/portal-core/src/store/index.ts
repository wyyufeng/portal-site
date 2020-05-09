import mpa from '@mpfe/mpa';
import { Model } from '@mpfe/mpa/lib/type';

function createModels(
  models: Array<Function>,
  dataProvider: any
): Array<Model> {
  return models.map((model) => model(dataProvider));
}

const coreStore = mpa({ silence: true });
export { coreStore, createModels };
