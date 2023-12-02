import React, { useState } from 'react';
import '../../connect/filehub/TagFile.css';
function TagRelatedPopup(props) {

    const tagInitials = [
        { id: 1,  tagname: 'Office Supplies', isChecked: false },
        { id: 2,  tagname: 'Team Management', isChecked: false },
        { id: 3,  tagname: 'Human Resources', isChecked: false },
        { id: 4,  tagname: 'Clients', isChecked: false },
        { id: 5,  tagname: 'Team Management', isChecked: false },
        { id: 6,  tagname: 'Office Supplies', isChecked: false },
        { id: 7,  tagname: 'Team Management', isChecked: false },
        { id: 8,  tagname: 'Human Resources', isChecked: false },
        { id: 9,  tagname: 'Clients', isChecked: false },
        { id: 10, tagname: 'Team Management', isChecked: false },
        { id: 11, tagname: 'Office Supplies', isChecked: false },
        { id: 12, tagname: 'Team Management', isChecked: false },
        { id: 13, tagname: 'Clients', isChecked: false },
        { id: 14, tagname: 'Human Resources', isChecked: false },
        { id: 15, tagname: 'Office Supplies', isChecked: false },
        // Add more checkboxes as needed
    ];
    const [tagLists, setTagLists] = useState(tagInitials);
    const [selectAll, setSelectAll] = useState(false);

    const toggleCheckbox = (id) => {
        const updatedtags = tagLists.map((tag) =>
            tag.id === id ? { ...tag, isChecked: !tag.isChecked } : tag
        );
        setTagLists(updatedtags);
        setSelectAll(updatedtags.every((tag) => tag.isChecked));
    };

    const toggleSelectAll = () => {
        const updatedtags = tagLists.map((tag) => ({
            ...tag,
            isChecked: !selectAll,
        }));
        setTagLists(updatedtags);
        setSelectAll(!selectAll);
    };

  return (
      <div className="tagRelatedPopup">
          <div className='tagToggle_sidebar'>

              <div className="tagToggle_sidebar_head">
                  <div className="tagsText">Tags</div>
                  <div className="tagBorderLine"></div>
                  <div className="tagsRelatedText">Related Tags</div>
              </div>
              <div className='tagToggle_sidebar_serach'>
                  <div className='selectTags'>
                      <div className="selectedTagCircle"></div>
                      <div className="selectedTagLabel">
                        Brand Guide Lines
                    </div>
                  </div>
              </div>
              <div className='instructionPara'>
                  The tags below are related to your search. Pick one or more tags to refine your search further.
              </div>
              <div className='selectAllArea'>
                  <div className="checkboxes__item">
                      <label className="checkbox style-c" >
                          <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
                          <div className="checkbox__checkmark"></div>
                          <div className="checkbox__body">Select all</div>
                      </label>
                  </div>
                  <div className='tagFileTotal'>19 Files</div>
              </div>
              <div className='allTagsArea'>
                  <ul className="alltagList">
                      {tagLists.map((tags) => (
                          <li key={tags.id}>
                            <div className='tagsRelateLists'>
                                  <div className="checkboxes__item">
                                      <label className="checkbox style-c" >
                                        <input type="checkbox" 
                                            checked={tags.isChecked}
                                            onChange={() => toggleCheckbox(tags.id)}
                                        
                                        />
                                          <div className="checkbox__checkmark"></div>
                                          <div className="checkbox__body"> {tags.tagname}</div>
                                    </label>
                                </div>
                                <div className='tagFileTotal'>19 Files</div>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className='tagCoupleBtn'>
                  <div className="skipButton" onClick={()=> props.setTagPopupShow(false)} >Skip</div>
                  <div className="viewFilesButton">View Files</div>
              </div>
          </div>
          
      </div>
  )
}

export default TagRelatedPopup;