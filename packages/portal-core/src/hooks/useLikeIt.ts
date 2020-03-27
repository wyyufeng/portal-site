import { useEffect, useState } from "react";
import useDataProvider from "./useDataProvider";

const useLikeIt = (
    resource: string
): {
    loading: boolean;
    error?: any;
    success: boolean;
} => {
    const dataProvider = useDataProvider("likeIt");
    const [state, setState] = useState({
        loading: true,
        error: null,
        success: false
    });
    useEffect(() => {
        setState({
            loading: true,
            error: null,
            success: false
        });
        dataProvider(resource)
            .then(({ code }) => {
                setState({
                    loading: false,
                    error: null,
                    success: code === 200
                });
            })
            .catch(err => {
                setState({
                    loading: false,
                    error: err,
                    success: false
                });
            });
    }, [resource, dataProvider]);
    return state;
};

export default useLikeIt;
