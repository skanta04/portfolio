import { Component, OnInit } from '@angular/core';

import { Experience } from './experience-model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  experiences: Experience[] = [
    new Experience('Cisco', 'Systems Engineer', 'June 2023 - August 2023','Using postman to do stuff and more api things', 'insertImagePath', 'Morrisville, NC' ),
    new Experience('VisuaLab', 'Lab Assistant', 'Nov 2022 - May 2023','Through learning Python back-end development and JavaScript web frameworks, I shadowed and assissted in the deployment and maintenance of an open source machine learning and document clustering tool to organize text data to assist with interpretive research. This tool will help analyze and understand large text corpora, potentially leading to new insights and discoveries in human-computer interaction, anthropology, and social psychology.', 'insertImagePath', 'Chapel Hill, NC' ),
    new Experience('Enzerna Biosciences', 'Research Assistant', 'September 2021 - August 2022','Helped research medicines that turn on/off genes that cause rare diseases or cancers. I learned various lab techniques such as RNA isolation, DNA Plasmid extraction, and using a gel electrophoresis machine.', 'insertImagePath', 'Morrisville, NC' ),
    new Experience('Code Ninjas', 'Instructor', 'June 2023 - August 2023','Help kids, ages 5-14, basic coding games, in JavaScript; tutor kids to code virtually and in person; supervise Roblox summer camps. During my time here, I helped raise diversity to decrease the gender gap in STEM related fields by recruiting young girls to participate in coding sessions.', 'insertImagePath', 'Morrisville, NC' )
  ]

  works: Experience[] = [
    new Experience('UNC Chapel Hill', "B.S. in Computer Science and Minors in MEJO & Statistics", 'Aug 2022 - May 2026', 'Activites: ', 'insertImagePath','Chapel Hill, NC'),
    new Experience('Cary High School', 'High School Diploma', 'Aug 2018 - Jun 2022', 'Activities:', "insertImagePath", 'Cary, NC')
  ]
}