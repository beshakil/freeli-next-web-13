"use client";
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const CreateRoomTeam = () => {

    const [loaderTeam, setLoaderTeam] = useState(true);
    const [selectedTeam, setSelectedTeam] = useState(null);

    // Simulating data fetching/loading
    useEffect(() => {
        // Simulate an API call or loading process
        setTimeout(() => {
            const dummyTeamList = [
                { value: 'team1', label: 'Team 1' },
                { value: 'team2', label: 'Team 2' },
                { value: 'team3', label: 'Team 3' },
                // Add more dummy data as needed
            ];
            setLoaderTeam(false);
            setTeamList(dummyTeamList);
        }, 2000); // Simulating 2 seconds delay for loading
    }, []);

    const [teamList, setTeamList] = useState([]);

    const getTeamValue = (selectedOption) => {
        setSelectedTeam(selectedOption);
    };
    return (
        <div className="inputGroup teamInput">
            <label className="inputLabel">
                Team<span className="red_star">*</span>
                {/* <span className="info_tooltip"></span> */}
            </label>
            <Select
                className="select-ecosystem"
                closeMenuOnSelect={true}
                options={
                    loaderTeam
                        ? [{ value: 'Loading...', label: 'Loading...', data: 'Loading...' }]
                        : teamList
                }
                isSearchable
                onChange={getTeamValue}
                readOnly={loaderTeam ? true : false}
                placeholder={<span className="selectPlaceholder">Select a team</span>}
            />
        </div>
    );
};

export default CreateRoomTeam;