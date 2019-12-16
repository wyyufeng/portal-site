import useDataProvider from './useDataProvider'
const useQueryList = () => {
    const dataProvider = useDataProvider();
    console.log(dataProvider)

};

export default useQueryList;
