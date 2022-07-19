import React from 'react'
import { useSelector } from 'react-redux'
import { CategoriesSelector} from './categoriesSlice'

export const Category = ({onChangeCategory}) => {
  const categories = useSelector(CategoriesSelector)

  const renderedCategory = categories.map( category=>{
    return <option key={category.ID} value={category.ID}>{category.Text}</option>
  })

  return (
    <div>            
        <p>Category:</p>
        <select name='category' onChange={(e)=>onChangeCategory(e)}>
          <option key="default" value="F"></option>
          {renderedCategory}
        </select>

    </div>
  )
}
