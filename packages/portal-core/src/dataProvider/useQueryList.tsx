import { useContext } from 'react'
import DataProviderContext from './DataProviderContext'
const useQueryList = () => {
    const dataProvider = useContext(DataProviderContext)
}

export default useQueryList