import mpa from "@mpfe/mpa";
function createModels(models, dataProvider) {
    return models.map(function (model) { return model(dataProvider); });
}
var coreStore = mpa({ silence: true });
export { coreStore, createModels };
