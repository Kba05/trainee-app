import React from 'react'
import { useSelector } from 'react-redux'
import { CategoriesSelector} from './categoriesSlice'

export const Category = ({onChangeCategory, selectedKey, defaultKey}) => {
  
  const categories = useSelector(CategoriesSelector)

  const renderedCategory = categories.map( category=>{
    return <option key={category.ID} value={category.ID}>{category.Text}</option>
  })

  return (
    <>            
        <select className="border border-indigo-50 bg-inherit outline-blue-500" name='category' onChange={onChangeCategory} value={selectedKey}>
          <option key={defaultKey} value={defaultKey}>{defaultKey}</option>
          {renderedCategory}
        </select>
    </>
  )
}
