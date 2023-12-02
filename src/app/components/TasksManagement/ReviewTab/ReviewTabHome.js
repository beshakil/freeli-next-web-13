import React, { useState } from "react";
import DoughnutChart from './DoughnutChart';
import { BsStarFill, BsArrowRight, BsArrowDown, BsInfoCircle } from "react-icons/bs";
import StarRating from './StarRating';
function ReviewTabHome() {
    const [commentBoxIndex, setCommentBoxIndex] = useState(-1);
    const [comment, setComment] = useState("");
    return (
        <div className="taskManagement_body">
            <div className='taskreviewContainer'>
                <div className='reviewsSection'>
                    <div className='reviewsHeader'>
                        <div className='reviewsTitle'><span className='reviews_icon'></span>Reviews </div>
                        <div className='reviewsAction'><span className='reviewsActionLabel'> Tasks Not Set For Review</span>
                            <span className='reviewsActionBtn'> 18 Tasks <span className="right_arrow_review"><BsArrowRight size={16} color="#fff" /></span> </span>

                        </div>
                    </div>
                    <div className='reviewsBody'>
                        <div className='efficiencyScore'>
                            <div className='efficiencyTitleSection'>
                                <div className='efficiencyTitle'>Efficiency Score <span><BsInfoCircle size={16} color='#0a256a' /></span></div>
                                <div className='efficiencyBtn'>View 18 New Ratings Below<span><BsArrowDown size={12} color='#318fff' /></span></div>
                            </div>
                            <div className='efficiencyChartSection'>
                                <DoughnutChart />
                            </div>
                            <div className='statusSection'>
                                <div className='_status'>
                                    <span className='statusDot'></span>
                                    <span className='statusLabel'> Very Well Done </span>
                                    <span className='statusParcent'> 18% </span>
                                </div>
                                <div className='_status'>
                                    <span className='statusDot'></span>
                                    <span className='statusLabel'> Satisfied </span>
                                    <span className='statusParcent'> 18% </span>
                                </div>
                                <div className='_status'>
                                    <span className='statusDot'></span>
                                    <span className='statusLabel'> Very Dissatisfied </span>
                                    <span className='statusParcent'> 18% </span>
                                </div>
                                <div className='_status'>
                                    <span className='statusDot'></span>
                                    <span className='statusLabel'> Well Done </span>
                                    <span className='statusParcent'> 18% </span>
                                </div>
                                <div className='_status'>
                                    <span className='statusDot'></span>
                                    <span className='statusLabel'> Dissatisfied </span>
                                    <span className='statusParcent'> 18% </span>
                                </div>
                                <div className='_status'>
                                    <span className='statusBtn'>40 Total Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pendingSection'>
                    <div className='pendingTitleSection'>Pending</div>
                    <div className='pendingBodySection'>
                        {commentBoxIndex ?
                        <div className='pendingTask'>
                            <div className='pendingTaskStage1'>
                                <div className='pendingtaskHeader'>
                                    <span className='pendingTaskIcon'>A</span>
                                    {/* <li className="ObsImageTask" style={{ marginTop: '0px', marginRight: '10px', minWidth: "32px", minHeight: "32px", alignItems: 'center', backgroundColor: props.popup.colorPlate[UserString(v.created_by_name.charAt(0))] }} >{v.created_by_name.charAt(0)}</li> */}
                            
                                    <p className='pendingTaskTitle'>
                                        <span className="pt_title"> Annabelle Garza completed a task!</span>
                                        <span className="pt_date"> On November 9, 2023</span>
                                    </p>
                                </div>
                                <div className='pendingtaskBody'>
                                    <div className='pendingBodyText'>Marketing and Brand Strategy Task</div>
                                    <div className='pendingProjectTitle'>Rakib Hasan</div>
                                </div>
                                <div className="starRating">
                                    <div>
                                        <p>Rate stars</p>
                                    </div>
                                    <div className='ratingContainer'>
                                        {/* {StarRating(v.rate)} */}
                                        <StarRating />

                                    </div>
                                </div>
                                <div className='pendingtaskFooter'>
                                    <span className='seeDetails'>See Task Details</span>
                                    <span className='reviewbtn'>Review Now</span>
                                </div>
                            </div>

                        </div>
                        :
                            <div className='pendingTaskStage4'>
                                <div className='pendingtaskHeader'>
                                    <span className='pendingTaskTitle'>Give Manzurul Alam a comment!</span>
                                </div>
                                <div className='pendingtaskBody'>
                                    <textarea className='commentBox' placeholder='Leave a comment' onChange={(event) => setComment(event.target.value)}>
                                        
                                    </textarea>
                                </div>
                                <div className='pendingtaskFooter'>
                                    <span className='goback' onClick={() => setCommentBoxIndex(-1)}>Go Back</span>
                                    <span className='reviewbtn' onClick={() => setCommentBoxIndex(-1)}> Save Comment </span>
                                </div>
                            </div>
                        }
      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewTabHome;
