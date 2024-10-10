import React from 'react'
// import { CurrentUserLoader } from './components/current-user-loader'
import {UserInfo} from './components/user-info'
import {BookInfo} from './components/book-info'
// import { UserLoader } from './components/user-loader'
import { SourceLoader } from './components/source-loader'
import { DataSource } from './components/data-source'
import axios from 'axios'
import { DataSourceWithRenderProps } from './components/data-source-with-renderProps'


//step 1
//in this section we change UserLoader container compponent with 
//curentUserLoader component to improve flaxibalty and reuseabilty



//step 2
// in another steps we changed SourceLoader component to improve flaxibalty and reuseabilty  so you can see we can use SourceLoader container component for any url with any data


//step 3
const getDatafromServer = async (url)=>{
  const response = await axios.get(url)
  return response.data
}
// in step 3 we change DataSource component with slourceLoader component 
// and  also we use getData function as a prop to get data from server
// with this change we can get data from any server our local storage and improve our component flaxiblity amd maintainability bicause DataSource component just call getData function 

// get Data from LocalStorage
const getdataFromLocalStorage = (key)=>{
  return localStorage.getItem(key)
}


// in the final step we can use DataSourceWithRenderProps component insted on DataSource component and we use render props pattern in this component 
// and you can see we can use any data source and render any component
// and with this change we improve our component flaxiblity and maintainability even more of before last seteps

const Message = ({msg})=>{
  return <h1>{msg}</h1>
}

export default function App() {
  return (
    <>
    <DataSourceWithRenderProps getData={()=>getDatafromServer("/users/3")} 
      render={(resource)=><UserInfo user={resource}/>}>
    </DataSourceWithRenderProps>
    <DataSourceWithRenderProps getData={()=>getdataFromLocalStorage("test")} 
      render={(resource)=><Message msg={resource}/>}>
    </DataSourceWithRenderProps>
    <DataSourceWithRenderProps getData={()=>getDatafromServer("/books/1")} 
      render={(resource)=><BookInfo book={resource}/>}>
    </DataSourceWithRenderProps>
    </>
  )
}
