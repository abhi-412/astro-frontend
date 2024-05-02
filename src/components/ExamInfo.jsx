import React, { useState } from 'react'
import { Parser } from 'htmlparser2';

const ExamInfo = (props) => {
    const {exam} = props

    function parseHTML(htmlData) {
        const parsedData = [];
    
        const parser = new Parser({
            ontext(text) {
                parsedData.push(text);
            }
        });
    
        parser.write(htmlData);
        parser.end();
    
        return parsedData.filter(Boolean); // Filter out empty strings
    }

    const [hiddenData, setHiddenData] = useState(true);
    const toggleHiddenData = ()=>{
        setHiddenData(!hiddenData)
    }

  return (
    <section id='exam-detail' class='w-full exam-detail-card col-span-3 flex justify-center py-5 '>
                <div className='w-full p-5 mt-4 bg-white shadow dark:bg-gray-900 dark:text-white'>
                        {exam?.additionalInformation?.length > 270 && <div>
                            <p style={{ display: 'inline' }} className='text-gray-600  dark:text-white m-1 text-sm lg:text-base'>{parseHTML(exam.additionalInformation.slice(0,270))}<span className={`${hiddenData ? "hidden" : ""} text-gray-600  dark:text-white m-1 overflow-hidden text-sm lg:text-base`}>{parseHTML(exam.additionalInformation.slice(270,exam?.additionalInformation?.length))}</span></p> 
                            <button onClick={toggleHiddenData} className=" lg:text-base mx-1 text-start text-blue-500 text-sm">{hiddenData ? "Read More..." : "See Less.."}</button> 

                        </div>
                        }
                        {
                            exam?.additionalInformation?.length <= 270 && <div>
                                <p className='text-gray-600 dark:text-white m-1 overflow-hidden text-sm lg:text-base'>{parseHTML(exam.additionalInformation)}</p> 
                            </div>
                        }
                       

                    </div>
        </section>
  )
}

export default ExamInfo
