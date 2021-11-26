import React, { Component } from 'react';
import Courses_one from '../components/CoursesBuild/Courses_one';
import Home_ten from '../components/HomeBuild/Home_ten';
import Home_eight from '../components/HomeBuild/Home_eight';
import Home_six from '../components/HomeBuild/Home_six';
import Lable from '../components/CoursesBuild/LableCourses';

export default class courses extends Component{
    render(){
        return(
            <>  
                <Lable/>    <coment /*Create by Kuznetsov Leonid 26.11.2021*//>
                <Courses_one/> <coment /*Create by Kuznetsov Leonid 26.11.2021*//>
                <coment /*Export component from home build aggre prototype*//>
                <Home_eight/> <coment /*Create by Kuznetsov Leonid 13.11.2021*//>
                <Home_six/> <coment /*Create by Kuznetsov Leonid 12.11.2021*//>
                <Home_ten/> <coment /*Create by Kuznetsov Leonid 21.11.2021*//>
            </>
        )
    }
}