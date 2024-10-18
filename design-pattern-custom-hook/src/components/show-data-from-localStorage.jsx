import { getDataFromLocalStorage } from "../lib/getDataFromLocal"
import { useDataSource } from "./data-source-hook"


export const ShowDataFromLocalStorage = ({name}) => {
    const data = useDataSource(()=>getDataFromLocalStorage(name))
    return (
        <h1>
            {data}
        </h1>
    )
}