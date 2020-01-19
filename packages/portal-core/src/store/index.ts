import mpa from "@mpfe/mpa";
import { Model } from "@mpfe/mpa/lib/type";

function createModels(models: Array<Function>, dataProvider): Array<Model> {
  return models.map(model => model(dataProvider));
}

const coreStore = mpa();
export { coreStore, createModels };
