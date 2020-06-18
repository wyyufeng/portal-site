import { useDispatch, } from "react-redux"
import { coreStore } from '../store'
import { useEffect, useCallback } from 'react';

const useHelmet = function ({ title, description, keywords }: { title: string, description: string, keywords: string }) {
  const dispatch = useDispatch();
  const setHelmet = useCallback(
    () => dispatch(coreStore.actions("helmet").setHelmet({
      payload: {
        title, description, keywords
      }
    })),
    [dispatch, title, description, keywords],
  )
  useEffect(() => {
    setHelmet()
  }, [setHelmet])

}
export default useHelmet
