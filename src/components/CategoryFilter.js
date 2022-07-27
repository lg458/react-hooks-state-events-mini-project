import React from "react";

function CategoryFilter({categories, categorySelected, handleCategoryClick}) {
  
  function onCategoryClick(category) {
    handleCategoryClick(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
       categories.map((category) => {
        const className = category === categorySelected ? "selected" : null; 
        return (
        <button key={category} 
          className={className}
          onClick={() => onCategoryClick(category)}>
          {category}
        </button>
        )
        })  
      }
    </div>
  );
}

export default CategoryFilter;
