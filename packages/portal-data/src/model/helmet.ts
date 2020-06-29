export type helmetState = {
  title: string,
  description: string,
  keywords: string
}
const helmet = function () {
  return {
    namespace: "helmet",
    state: {
      title: "",
      description: "",
      keywords: ""
    },
    reducer: {
      setHelmet(state: helmetState, { payload }: { payload: helmetState }) {
        return {
          ...state, ...payload
        }
      }
    }
  }
}
export default helmet
