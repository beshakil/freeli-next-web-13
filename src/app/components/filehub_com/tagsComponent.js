"use client";
import React, { useState, useEffect } from "react";
// import classNames from "classnames";
import { BsStarFill, BsPlus } from "react-icons/bs";
import "moment-timezone";
// import TagviewAll from './TagviewAll'
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
// import FilehubLayout from '../FilehubLayout';

function TagsComponent(porps) {
    const [tagListActive, setTagListActive] = useState(2);
    const [tagFilePanelDetailsShow, setTagFilePanelDetailsShow] = useState(true);
    const [AllTag, setAllTag] = useState("");

    const [tag_list, setTag_list] = useState(
        [
            {
                tag_id: 1,
                title: "Policy Document",
                tag_type: "public",
                use_count: 12,
                tag_color: "#023d67",
            },
            {
                tag_id: 2,
                title: "Agreement",
                tag_type: "public",
                use_count: 13,
                tag_color: "#023d67",
            },
            {
                tag_id: 3,
                title: "Contract",
                tag_type: "private",
                use_count: 12,
                tag_color: "#023d67",
            },
            {
                tag_id: 4,
                title: "Invoice",
                tag_type: "public",
                use_count: 13,
                tag_color: "#023d67",
            },
            {
                tag_id: 5,
                title: "Draft",
                tag_type: "private",
                use_count: 12,
                tag_color: "#023d67",
            },
            {
                tag_id: 6,
                title: "Proposal",
                tag_type: "public",
                use_count: 13,
                tag_color: "#023d67",
            },
        ]);
    const [initialLoader, setInitialLoader] = useState(false);
    const [viewAllTags, setViewAllTags] = useState("");
    const [input_val, setInputVal] = useState("");
    const [personalTagText, setPersonalTagText] = useState("");
    const [errorTitleTag, setErrorTitleTag] = useState(false);

    const openFiles = (type) => {
        porps.setTagPopupShow(!porps.tagPopupShow);
    };

    return (
        <>
            <div className="tag_main_area">
                <div className="tagFullArea">
                    <div
                        className="searchAndFilter forTagFilter"
                        style={{
                            borderBottom: "1px solid #eeeeee",
                            position: "relative",
                            height: "78px",
                        }}
                    >
                        <input
                            className="_inputSearchBar mainSerach"
                            type="text"
                            id="_inputBar"
                            placeholder="Search for a  tags"
                            defaultValue={input_val}
                            // onChange={(event) => { setInputVal(event.target.value) }}
                            autoFocus
                        />

                        {input_val === "" ? (
                            <div
                                style={{
                                    right: "31px",
                                    height: "31px",
                                    top: "23px",
                                }}
                                className="srcBtnSection"
                                data-for="top_head"
                                data-tip="Search"
                            ></div>
                        ) : (
                            <span
                                style={{ right: "31px" }}
                                className="clearAllSrcTest"
                                //onClick={() => { setInputVal('') }}
                                data-for="top_head"
                                data-tip="Clear Search"
                            ></span>
                        )}
                    </div>
                    <div
                        className={
                            initialLoader ? "tagHomeTable  PointerDissable" : "tagHomeTable"
                        }
                    >
                        <div className="tagTableRow" style={{ maxHeight: "300px" }}>
                            <div
                                className="tagTable"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, #DCE8F6 16%, #E5E6F4 88%)",
                                    padding: "20px",
                                }}
                            >
                                <div className="favTag">Favourite tags</div>
                                <div style={{ height: "170px", overflowY: "auto" }}>
                                    <div
                                        className="tagTable1Flex"
                                        style={{
                                            height: "auto",
                                            paddingBottom: "30px",
                                            justifyContent: "left",
                                        }}
                                    >
                                        {/* <div className='tagTableCol1'> */}

                                        {initialLoader ? (
                                            <p className="NotFoundTagnew">waiting for data</p>
                                        ) : (
                                            <>
                                                {tag_list.length > 0 ? (
                                                    <>
                                                        {" "}
                                                        {tag_list.map((data, index) => (
                                                            <div
                                                                className="favTagViewMain"
                                                                key={"fav" + data.tag_id}
                                                            >
                                                                <div
                                                                    className="favTagView"
                                                                    onClick={() => {
                                                                        openFiles(data);
                                                                    }}
                                                                >
                                                                    <span
                                                                        className="PersonalTag_circle"
                                                                        style={{
                                                                            backgroundColor: data.tag_color,
                                                                            borderColor: "var(--PrimaryC)",
                                                                        }}
                                                                    ></span>
                                                                    <span style={{ marginTop: "-1px" }}>
                                                                        {data.title.length < 30
                                                                            ? data.title
                                                                            : `${data.title.substring(0, 29)}...`}
                                                                    </span>
                                                                </div>
                                                                <span style={{ marginTop: "-2px" }}>
                                                                    <BsStarFill
                                                                        size={16}
                                                                        onClick={(event) => {
                                                                            favouriteUnfavourite(event, {
                                                                                tag_id: data.tag_id,
                                                                                status: 2,
                                                                            });
                                                                        }}
                                                                        color="rgb(254, 191, 58)"
                                                                    />{" "}
                                                                </span>
                                                            </div>
                                                        ))}{" "}
                                                    </>
                                                ) : (
                                                    <p className="NotFoundTagnew">
                                                        No favourite tag found
                                                    </p>
                                                )}
                                            </>
                                        )}

                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tagTable"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(142deg, #DFE7E3 23%, #EBE7E1 54%)",
                                }}
                            >
                                <div className="tagTable2">
                                    <div className="tagTableCol2">
                                        <div className="sharedTag">
                                            <div className="tag">
                                                <div className="bigFont">
                                                    {
                                                        tag_list.filter(
                                                            (e) =>
                                                                e.tag_type === "public" &&
                                                                e.title !== "UNTAGGED FILES"
                                                        ).length
                                                    }
                                                </div>
                                                <div className="tagText">
                                                    {tag_list.filter(
                                                        (e) =>
                                                            e.tag_type === "public" &&
                                                            e.title !== "UNTAGGED FILES"
                                                    ).length > 1 ? (
                                                        <>
                                                            Shared <br /> Tags
                                                        </>
                                                    ) : (
                                                        <>
                                                            Shared <br /> Tag
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="viewTag"
                                                onClick={() => {
                                                    setAllTag("shared");
                                                    setViewAllTags("Shared_Tags");
                                                    setInputVal("");
                                                }}
                                            >
                                                <div>View all tags</div>
                                                <div className="goIconBlack"></div>
                                            </div>
                                        </div>
                                        <div className="sharedTag">
                                            <div className="tag">
                                                <div className="bigFont">
                                                    {
                                                        tag_list.filter((e) => e.tag_type === "private")
                                                            .length
                                                    }
                                                </div>
                                                <div className="tagText">
                                                    {tag_list.filter((e) => e.tag_type === "private")
                                                        .length > 1 ? (
                                                        <>
                                                            {" "}
                                                            Personal <br /> Tags
                                                        </>
                                                    ) : (
                                                        <>
                                                            {" "}
                                                            Personal <br /> Tag
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="viewTag">
                                                <div
                                                    onClick={() => {
                                                        setAllTag("me");
                                                        setViewAllTags("Personal_Tags");
                                                        setInputVal("");
                                                    }}
                                                >
                                                    View all tags
                                                </div>
                                                <div className="goIconBlack"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tagTableRow31">
                                        {tag_list.filter((e) => e.title === "UNTAGGED FILES")
                                            .length > 0 ? (
                                            <>
                                                {tag_list
                                                    .filter((e) => e.title === "UNTAGGED FILES")
                                                    .map((taglist, index) => (
                                                        <div
                                                            className="tagTableRow3"
                                                            onClick={() => {
                                                                openFiles(taglist);
                                                            }}
                                                            key={"normal_tagU" + taglist.tag_id}
                                                        >
                                                            <div
                                                                className="tagTableRow3"
                                                                onClick={() => {
                                                                    openFiles(taglist);
                                                                }}
                                                                key={index}
                                                            >
                                                                <div>
                                                                    {taglist.use_count} Untagged{" "}
                                                                    {taglist.use_count > 1 ? "Files" : "file"}
                                                                </div>
                                                                <div className="goIcon"></div>
                                                            </div>
                                                        </div>
                                                    ))}{" "}
                                            </>
                                        ) : (
                                            <div
                                                className="tagTableRow3"
                                                style={{
                                                    pointerEvents: "none !important",
                                                    cursor: "text",
                                                }}
                                            >
                                                <div> No Untagged File</div>
                                                <div className="goIcon"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tagTableRow tagTableRowResponsive"
                            style={{ height: "300px" }}
                        >
                            <div
                                className="tagTable3"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(142deg, #FDF0F6 30%, #F1EDF8 43%)",
                                    overflowY: "auto",
                                }}
                            >
                                <div className="most_recent">Most Recent</div>
                                <div className="tagTable1 darkThemeText">
                                    {initialLoader ? (
                                        <p className="NotFoundTagnew">waiting for data</p>
                                    ) : (
                                        <>
                                            {" "}
                                            {tag_list.filter(
                                                (e) =>
                                                    (e.l_show === undefined || e.l_show) &&
                                                    e.use_count > 0
                                            ).length > 0 ? (
                                                <div className="tagTableCol3">
                                                    {tag_list.map((taglist, index) => (
                                                        <div
                                                            className="filebar"
                                                            key={"normal_tag" + taglist.tag_id}
                                                            onClick={() => {
                                                                openFiles(taglist);
                                                            }}
                                                        >
                                                            <div className="fileListTag">
                                                                <span
                                                                    className="PersonalTag_circle"
                                                                    style={{
                                                                        backgroundColor: taglist.tag_color,
                                                                        borderColor: "var(--PrimaryC)",
                                                                        marginTop: "3px",
                                                                    }}
                                                                ></span>
                                                                <span>
                                                                    {" "}
                                                                    {taglist.title.length < 40
                                                                        ? taglist.title
                                                                        : `${taglist.title.substring(0, 39)}...`}
                                                                </span>
                                                            </div>

                                                            <span className="total_tagFiles">
                                                                {taglist.use_count > 1
                                                                    ? taglist.use_count + " files"
                                                                    : taglist.use_count === 1
                                                                        ? taglist.use_count + " file"
                                                                        : 0 + " file"}
                                                            </span>
                                                            <span className="favouriteUnfavourite_icon">
                                                                {taglist.favourite !== undefined &&
                                                                    taglist.favourite.indexOf(
                                                                        props.logindata.user.id
                                                                    ) > -1 ? (
                                                                    <BsStarFill
                                                                        size={16}
                                                                        color="rgb(254, 191, 58)"
                                                                        onClick={(event) => {
                                                                            favouriteUnfavourite(event, {
                                                                                tag_id: taglist.tag_id,
                                                                                status: 2,
                                                                            });
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <BsStarFill
                                                                        size={16}
                                                                        onClick={(event) => {
                                                                            favouriteUnfavourite(event, {
                                                                                tag_id: taglist.tag_id,
                                                                                status: 1,
                                                                            });
                                                                        }}
                                                                        color="#d8d8d8"
                                                                    />
                                                                )}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="NotFoundTagnew">No recent tag found</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div
                                className="tagTable3"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(142deg, #FFF5E8 10%, #F0F7E6 59%)",
                                    overflowY: "auto",
                                }}
                            >
                                <div className="personal_tag">
                                    <span style={{ marginTop: "2px" }}>Personal Tag(s)</span>{" "}
                                    <div
                                        className={errorTitleTag ? " errorBorder" : ""}
                                        style={{ border: "1.5px solid white" }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Create a personal tag"
                                            defaultValue={personalTagText}
                                        // onChange={(event) => setPersonalTagText(event.target.value)}
                                        // onKeyUp={(event) => event.keyCode === 13 && createPersonalTag(event)}
                                        ></input>
                                        <Tooltip
                                            placement="top"
                                            overlay={<span>Create a personal tag</span>}
                                        >
                                            <span
                                                //onClick={() => createPersonalTag()}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <BsPlus size={18} className="iconPlus" color="#ffff" />
                                            </span>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="tagTable1 darkThemeText">
                                    {initialLoader ? (
                                        <p className="NotFoundTagnew">waiting for data</p>
                                    ) : (
                                        <>
                                            {tag_list.filter(
                                                (e) =>
                                                    (e.l_show === undefined || e.l_show) &&
                                                    e.tag_type === "private"
                                            ).length > 0 ? (
                                                <div className="tagTableCol3 personalTag">
                                                    {tag_list
                                                        .filter(
                                                            (e) =>
                                                                (e.l_show === undefined || e.l_show) &&
                                                                e.tag_type === "private"
                                                        )
                                                        .map((taglist, index) => (
                                                            <div
                                                                className="filebar"
                                                                key={"normal_tag" + taglist.tag_id}
                                                                onClick={() => { openFiles(taglist) }}
                                                            >
                                                                <div className="fileListTag">
                                                                    <span
                                                                        className="PersonalTag_circle"
                                                                        style={{
                                                                            backgroundColor: "#FBD9E9",
                                                                            borderColor: "#e82b87",
                                                                            marginTop: "3px",
                                                                        }}
                                                                    ></span>
                                                                    <span>
                                                                        {" "}
                                                                        {taglist.title.length < 40
                                                                            ? taglist.title
                                                                            : `${taglist.title.substring(0, 39)}...`}
                                                                    </span>
                                                                </div>
                                                                <span className="total_tagFiles">
                                                                    {taglist.use_count > 1
                                                                        ? taglist.use_count + " files"
                                                                        : taglist.use_count === 1
                                                                            ? taglist.use_count + " file"
                                                                            : 0 + " file"}
                                                                </span>
                                                                <span className="favouriteUnfavourite_icon">
                                                                    {taglist.favourite !== undefined &&
                                                                        taglist.favourite.indexOf(
                                                                            props.logindata.user.id
                                                                        ) > -1 ? (
                                                                        <BsStarFill
                                                                            size={16}
                                                                            color="rgb(254, 191, 58)"
                                                                        //onClick={(event) => { favouriteUnfavourite(event, { tag_id: taglist.tag_id, status: 2 }) }}
                                                                        />
                                                                    ) : (
                                                                        <BsStarFill
                                                                            size={16}
                                                                            onClick={(event) => {
                                                                                favouriteUnfavourite(event, {
                                                                                    tag_id: taglist.tag_id,
                                                                                    status: 1,
                                                                                });
                                                                            }}
                                                                            color="#d8d8d8"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </div>
                                                        ))}
                                                </div>
                                            ) : (
                                                <p className="NotFoundTagnew">No personal tag found</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TagsComponent;
