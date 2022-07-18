import React from 'react'
import { useSelector } from 'react-redux'
import { CategoriesSelector} from './categoriesSlice'

export const Category = () => {
  const categories = useSelector(CategoriesSelector)

  const renderedCategory = categories.map( category=>{
    return  <div key={category.ID}> {category.Text}</div>
  })

  return (
    <div>            
        <p>Category:</p>
        {renderedCategory}
    </div>
  )
}
