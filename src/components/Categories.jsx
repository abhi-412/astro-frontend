import { useState, useEffect } from 'react';
import data from "../../public/data.json"
import categoryData from "../../public/categories.json"
import { navigate } from 'astro:transitions/client';


const Categories = () => {
  const [categories, setCategories] = useState(categoryData.examCategories);
  const [exams, setExams] = useState(data.exams);
  const [category, setCategory] = useState("All");

  const handleCategory = (id) => {
    setCategory(id);
  };

  const handleClick = (exam,slug)=>{
    navigate(`/${slug}`,{exam})
  }

  return (
    <section className='px-5 py-5 mt-4 flex justify-center'>
      <div className='exam-cards container lg:w-10/12 flex flex-col gap-5'>
        <div className='title flex justify-start'>
          <h1 className='text-2xl font-semibold'>Choose Your Goal</h1>
        </div>

        <div className='exam-category overflow-scroll bg-white flex gap-5'>
          <button 
            className={`${category === "All" ? "bg-blue-600 text-blue-900" : null} bg-gray-200 px-8 py-2 text-nowrap rounded-3xl focus:bg-blue-600 focus:text-white`}
            onClick={() => handleCategory("All")}
          >
            All
          </button>
          {categories.map((item, i) => (
            <button
              key={i}
              className={`${category === item.category && "bg-blue-600 text-blue-900"} bg-gray-200 px-8 py-2 text-nowrap rounded-3xl focus:bg-blue-600 focus:text-white`}
              onClick={() => handleCategory(item._id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-6'>
          {exams
            .filter((exam) => exam.category._id === category || category === "All")
            .map((exam) => (
              <button 
                key={exam._id}
                className='border exam-card lg:px-2 px-2 py-2 lg:py-2 bg-white rounded flex flex-col lg:flex-row md:flex-row gap-5 items-center justify-center  border-gray-300'
                onClick={() => handleClick(exam, exam.metadata.slug)}
              >
                {exam.logo && (
                  <div className='exam-logo'>
                    <img src={exam.logo} className='w-12 h-12' alt='' />
                  </div>
                )}
                <div className='exam-name flex items-center justify-center'>
                  <h5>{exam.metadata.shortForm}</h5>
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
