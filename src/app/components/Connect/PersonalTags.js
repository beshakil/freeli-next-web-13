"use client"
import React from 'react';
const sharedTagList = [
    {
        id: 1,
        tagName: 'John Smith',
    },
    {
        id: 2,
        tagName: 'Jane Doe',
    },
    {
        id: 3,
        tagName: 'Bob Johnson',
    }
]

const PersonalTags = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [sharedTagsData, setSharedTagsData] = React.useState(sharedTagList);
    const [selectedSharedTags, setSelectedSharedTags] = React.useState([]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSelectSharedTags = (Tags) => {
        const updatedTagsData = sharedTagsData.filter((u) => u.id !== Tags.id);
        setSharedTagsData(updatedTagsData);
        setSelectedSharedTags([...selectedSharedTags, Tags]);
    };

    const handleRemoveSharedTags = (Tags) => {
        setSelectedSharedTags(selectedSharedTags.filter((selectedTags) => selectedTags.id !== Tags.id));
        setSharedTagsData([...sharedTagsData, Tags]);
    };

    const filteredTagssData = sharedTagsData.filter((Tags) =>
        Tags.tagName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <div className="tagAddSearch public_tag">
                <input
                    className="participantsSearch"
                    value={searchQuery}
                    onChange={handleSearch}
                    type="text" placeholder="Search tag" />
            </div>
            <div className="selectedParticipants tag_container_mini">
                {selectedSharedTags.map((Tags) => (
                    <div key={Tags.id} className="miniItem" style={{ backgroundColor: 'rgb(232, 42, 135)' }}>
                        <div className="miniItem_name">{Tags.tagName}</div>
                        <div className="miniItem_remove" onClick={() => handleRemoveSharedTags(Tags)}></div>
                    </div>
                ))}
            </div>
            {filteredTagssData.length === 0 ? (
                <p class="NomemberFound">No member(s) found!</p>
            ) : (
                filteredTagssData.map((Tags) => (
                    <div key={Tags.id} className="tagContainer" onClick={() => handleSelectSharedTags(Tags)}>
                        <div className="tagItem" style={{ borderLeft: '4px solid rgb(2, 61, 103)' }}> <p className="tagTitle">{Tags.tagName}</p></div>
                    </div>
                ))
            )}
        </>
    );
};

export default PersonalTags;