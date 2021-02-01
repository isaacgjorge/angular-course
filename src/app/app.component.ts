import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    courses = COURSES;

    @ViewChild('cardRef0')   
    cardRef0: CourseCardComponent;

    @ViewChild('cardRef1')   
    cardRef1: CourseCardComponent;

    @ViewChild('container')
    container: ElementRef;
    
    title = COURSES[0].description;
    price = 9.99;
    startDate = new Date(2000, 0, 1);
    rate = 0.67;

    onCourseSelected(course:Course){
        // console.log(course);      
        console.log(this.container);      
    }
}
