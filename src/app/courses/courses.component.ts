import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      title: 'Introduction to Web Development',
      description: 'Learn the basics of web development using HTML, CSS, and JavaScript.',
      image: 'assets/images/web-development.jpg'
    },
    {
      title: 'Data Science and Machine Learning',
      description: 'Explore the principles and techniques of data science and machine learning.',
      image: 'assets/images/data-science.jpg'
    },
  ];
}
