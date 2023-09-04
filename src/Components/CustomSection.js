import React from 'react';
import './CustomSection.css'; 

const CustomSection = ({ titleText, descriptionText, tagsPlaceholder, buttonText }) => {
  return (
    <div className="sectioncustom">
      <h2>What do you want to share </h2>

      <label className=''>Title</label>
      <input className ='Question-1' type="text" placeholder="Start your question with how, what, why, etc." />

      <label className='Class'>Describe your Problem</label>
      <textarea className ='Question-2' placeholder="Describe your problem..." />

      <label className='Class'>Tags</label>
      <input className ='Question-3' type="text" placeholder="Please add upto 3 tags to describe what your question is about e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
};

export default CustomSection;
