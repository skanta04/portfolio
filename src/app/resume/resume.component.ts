import { Component, OnInit } from '@angular/core';

import { Experience } from './experience-model';

import { Style } from './style-model';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent {
  experiences: Experience[] = [
    new Experience('Cisco', 'Systems Engineer', 'June 2023 - August 2023',['Developed a Cisco Learning Lab using Python and RESTful APIs to provide newcomers with hands-on experience in creating, running, and deleting Instant Tests, enabling them to connect with the ThousandEyes agent, MicrosoftOffice Login', 'Utilized LLM, pandas, numpy, and nltk to design and implement a Webex bot that efficiently extracts and presents diverse client information', 'Researched and analyzed various customer software and hardware issues, enabling the presentation of appropriate Cisco solutions such as Umbrella, Meraki, SecureX, and more.'], "assets/images/cisco.jpeg", 'Morrisville, NC', '#ccdfd7' ),

    new Experience('Alpha Omega Epsilon', 'Founder and Web Developer', 'April 2023 - Present', ['Founded a professional sorority focused on empowering women with a passion for technology, attracting a membership of 15 women thus far, and actively contributing to bridging the gender gap in the field.', 'Spearheaded the development of a dynamic website utilizing CSS, HTML, and JavaScript to effectively showcase the sorority’s mission, values, and initiatives.','Overseeing the final stages of a comprehensive recruiting system and event planning schedule to streamline organizational processes.'], "assets/images/aoe.png", 'Chapel Hill, NC','#ccdfd7'),

    new Experience('Enzerna Biosciences', 'Research Assistant', 'September 2021 - August 2022',['Researched medicines that turn on/off genes that cause rare diseases or cancers.', 'Utilized various lab techniques such as RNA isolation, DNA Plasmid extraction, and gel electrophoresis.'], "assets/images/enzerna.jpeg", 'Morrisville, NC' , '#ccdfd7'),

    new Experience('Code Ninjas', 'Instructor', 'June 2023 - August 2023',['Provided engaging and comprehensive instruction to children aged 5-14, fostering their understanding of JavaScript and enabling them to develop Roblox and browser-based games.', 'Drove recruitment efforts by actively engaging with interested parents; consistent influx of 2 to 4 enrollments per week.'], "assets/images/ninja1.png", 'Morrisville, NC', '#ccdfd7')
  ]

  works: Experience[] = [
    new Experience('UNC Chapel Hill', "B.S. in Computer Science and Minors in MEJO & Statistics", 'Aug 2022 - May 2026', ['Activites: '], "assets/images/unc.png",'Chapel Hill, NC', '#ccdfd7')
    
  ]

  style: Style = new Style();

  constructor() {

  }
}