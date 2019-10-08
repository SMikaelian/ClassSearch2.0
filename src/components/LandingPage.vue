<template>
  <div class="searchTable" style="width: 100%">
		<form>
		<table style="width: 50%" align="center">
			<tr>
				<th>
					<select name="Term" style="width: 150px" >
						<option value="Term">Term</option>
						<option value="Fall 2019">Fall 2019</option>
						<option value="Spring 2019">Spring 2019</option>
						<option value="Fall 2020">Fall 2020</option>
						<option value="Spring 2020">Spring 2020</option>
					</select>
				</th>
				<th>
					<select name="Major" style="width: 150px">
						<option value="Major">Major</option>
						<option value="Accountancy: Information Systems">Accountancy: Information Systems</option>
						<option value="Accountancy: Professional Accountancy">Accountancy: Professional Accountancy</option>
						<option value="Africana Studies: African and African-American Social Sciences">Africana Studies: African and African-American Social Sciences</option>
						<option value="Africana Studies: African and African-American Humanities and Cultural Studies">Africana Studies: African and African-American Humanities and Cultural Studies</option>
						<option value="Africana Studies: African-American Urban Education">Africana Studies: African-American Urban Education</option>
						<option value="Anthropology Art">Anthropology Art</option>
						<option value="Asian American Studies: Standard Major">Asian American Studies: Standard Major</option>
						<option value="Asian American Studies: Double Major">Asian American Studies: Double Major</option>
						<option value="Athletic Training Biochemistry">Athletic Training Biochemistry</option>
						<option value="Biology">Biology</option>
						<option value="Biology: Cell and Molecular Biology">Biology: Cell and Molecular Biology</option>
						<option value="Biology: Ecology and Evolutionary Biology">Biology: Ecology and Evolutionary Biology</option>
						<option value="Biology: Microbiology">Biology: Microbiology</option>
						<option value="Biology: Biotechnology/Medical Technology">Biology: Biotechnology/Medical Technology</option>
						<option value="Biology: Marine Biology">Biology: Marine Biology</option>
						<option value="Business Administration: Business Law">Business Administration: Business Law</option>
						<option value="Business Administration: Global Supply Chain Management">Business Administration: Global Supply Chain Management</option>
						<option value="Business Administration: Real Estate">Business Administration: Real Estate</option>
						<option value="Business Administration: Systems and Operations Management">Business Administration: Systems and Operations Management</option>
						<option value="Central American Studies: Standard Major">Central American Studies: Standard Major</option>
						<option value="Central American Studies: Double Major">Central American Studies: Double Major</option>
						<option value="Chemistry Chemistry">Chemistry Chemistry</option>
						<option value="Chicano and Chicana Studies: Single Major">Chicano and Chicana Studies: Single Major</option>
						<option value="Chicano and Chicana Studies: Double Major">Chicano and Chicana Studies: Double Major</option>
						<option value="Chicano and Chicana Studies: Chicana/o Studies Social Science Subject Matter Waiver Program">Chicano and Chicana Studies: Chicana/o Studies Social Science Subject Matter Waiver Program</option>
						<option value="Child and Adolescent Development: Applied Developmental Science">Child and Adolescent Development: Applied Developmental Science</option>
						<option value="Child and Adolescent Development: Early Childhood Development ">Child and Adolescent Development: Early Childhood Development </option>
						<option value="Cinema and Television Arts: Entertainment Media Management">Cinema and Television Arts: Entertainment Media Management</option>
						<option value="Cinema and Television Arts: Film Production">Cinema and Television Arts: Film Production</option>
						<option value="Cinema and Television Arts: Media Theory and Criticism">Cinema and Television Arts: Media Theory and Criticism</option>
						<option value="Cinema and Television Arts: Multimedia Production">Cinema and Television Arts: Multimedia Production</option>
						<option value="Cinema and Television Arts: Screenwriting">Cinema and Television Arts: Screenwriting</option>
						<option value="Cinema and Television Arts: Television Production">Cinema and Television Arts: Television Production</option>
						<option value="B.A.Civil Engineering Communication Studies">B.A.Civil Engineering Communication Studies</option>
						<option value="Communicative Disorders">Communicative Disorders</option>
						<option value="Computer Engineering">Computer Engineering</option>
						<option value="Computer Information Technology">Computer Information Technology</option>
						<option value="Computer Science">Computer Science</option>
						<option value="Construction Management">Construction Management</option>
						<option value="Criminology and Justice Studies">Criminology and Justice Studies</option>
						<option value="Deaf Studies">Deaf Studies</option>
						<option value="Economics">Economics</option>
						<option value="Electrical Engineering">Electrical Engineering</option>
						<option value="Engineering Management">Engineering Management</option>
						<option value="English: Literature">English: Literature</option>
						<option value="English: Creative Writing">English: Creative Writing</option>
						<option value="English: Subject Matter Program for the Single Subject Credential">English: Subject Matter Program for the Single Subject Credential</option>
						<option value="English: Four-Year Integrated (FYI) English Subject Matter Program for the Single Subject Credential">English: Four-Year Integrated (FYI) English Subject Matter Program for the Single Subject Credential</option>
						<option value="English: Junior-Year Integrated (JYI) English Subject Matter Program for the Single Subject Credential">English: Junior-Year Integrated (JYI) English Subject Matter Program for the Single Subject Credential</option>
						<option value="English: Honors Environmental and Occupational Health: Industrial Hygiene">English: Honors Environmental and Occupational Health: Industrial Hygiene</option>
						<option value="Environmental and Occupational Health">Environmental and Occupational Health</option>
						<option value="Family and Consumer Sciences: Apparel Design and Merchandising">Family and Consumer Sciences: Apparel Design and Merchandising</option>
						<option value="Family and Consumer Sciences: Consumer Affairs">Family and Consumer Sciences: Consumer Affairs</option>
						<option value="Family and Consumer Sciences: Family and Consumer Sciences Education">Family and Consumer Sciences: Family and Consumer Sciences Education</option>
						<option value="Family and Consumer Sciences: Family Studies">Family and Consumer Sciences: Family Studies</option>
						<option value="Family and Consumer Sciences: Interior Design">Family and Consumer Sciences: Interior Design</option>
						<option value="Family and Consumer Sciences: Nutrition Dietetics and Food Science">Family and Consumer Sciences: Nutrition Dietetics and Food Science</option>
						<option value="Finance: Financial Analysis">Finance: Financial Analysis</option>
						<option value="Finance: Financial Planning">Finance: Financial Planning</option>
						<option value="Finance: Insurance">Finance: Insurance</option>
						<option value="French">French</option>
						<option value="Gender and Women’s Studies: Double Major">Gender and Women’s Studies: Double Major</option>
						<option value="Gender and Women’s Studies">Gender and Women’s Studies</option>
						<option value="Geography: General">Geography: General</option>
						<option value="Geography: Geographic Information Science">Geography: Geographic Information Science</option>
						<option value="Geology: Geology">Geology: Geology</option>
						<option value="Geology: Geophysics">Geology: Geophysics</option>
						<option value="B.S.Health Administration">B.S.Health Administration</option>
						<option value="History">History</option>
						<option value="Information Systems: Business Systems">Information Systems: Business Systems</option>
						<option value="Information Systems: Software Technology">Information Systems: Software Technology</option>
						<option value="Information Systems: Computer Information Technology">Information Systems: Computer Information Technology</option>
						<option value="Information Systems: Health Systems">Information Systems: Health Systems</option>
						<option value="Journalism Journalism: Broadcast">Journalism Journalism: Broadcast</option>
						<option value="Journalism: Public Relations">Journalism: Public Relations</option>
						<option value="Kinesiology: Exercise Science">Kinesiology: Exercise Science</option>
						<option value="Kinesiology: Dance">Kinesiology: Dance</option>
						<option value="Kinesiology: Sport Studies">Kinesiology: Sport Studies</option>
						<option value="Kinesiology: Applied Fitness and Active Lifestyle Development">Kinesiology: Applied Fitness and Active Lifestyle Development</option>
						<option value="Kinesiology: Physical Education">Kinesiology: Physical Education</option>
						<option value="Languages and Cultures: Armenian">Languages and Cultures: Armenian</option>
						<option value="Languages and Cultures: French">Languages and Cultures: French</option>
						<option value="Languages and Cultures: Italian">Languages and Cultures: Italian</option>
						<option value="Languages and Cultures: Japanese">Languages and Cultures: Japanese</option>
						<option value="Liberal Studies: Pre-Credential Program">Liberal Studies: Pre-Credential Program</option>
						<option value="Liberal Studies: Integrated Teacher Education Program (ITEP) Junior">Liberal Studies: Integrated Teacher Education Program (ITEP) Junior</option>
						<option value="Liberal Studies: Integrated Teacher Education Program (ITEP) Freshman">Liberal Studies: Integrated Teacher Education Program (ITEP) Freshman</option>
						<option value="Liberal Studies: Interdisciplinary Studies">Liberal Studies: Interdisciplinary Studies</option>
						<option value="Linguistics">Linguistics</option>
						<option value="Management">Management</option>
						<option value="Manufacturing Systems Engineering">Manufacturing Systems Engineering</option>
						<option value="Marketing">Marketing</option>
						<option value="Mathematics: Four-Year Integrated (FYI) Mathematics Subject Matter Program for the Single Subject Credential">Mathematics: Four-Year Integrated (FYI) Mathematics Subject Matter Program for the Single Subject Credential</option>
						<option value="Mathematics: Junior-Year Integrated (JYI) Mathematics Subject Matter Program for the Single Subject Credential">Mathematics: Junior-Year Integrated (JYI) Mathematics Subject Matter Program for the Single Subject Credential</option>
						<option value="Mathematics: General">Mathematics: General</option>
						<option value="Mathematics: Secondary Teaching">Mathematics: Secondary Teaching</option>
						<option value="Mathematics: Mathematics">Mathematics: Mathematics</option>
						<option value="Mathematics: Statistics">Mathematics: Statistics</option>
						<option value="Mathematics: Applied Mathematical Sciences">Mathematics: Applied Mathematical Sciences</option>
						<option value="Mechanical Engineering">Mechanical Engineering</option>
						<option value="Modern Jewish Studies">Modern Jewish Studies</option>
						<option value="Music: Breadth Studies">Music: Breadth Studies</option>
						<option value="B.A.Music: Music Industry Studies">B.A.Music: Music Industry Studies</option>
						<option value="Music: Music Education">Music: Music Education</option>
						<option value="Music: Music Therapy">Music: Music Therapy</option>
						<option value="Music: Jazz Studies">Music: Jazz Studies</option>
						<option value="Music: Composition/Commercial and Media Writing">Music: Composition/Commercial and Media Writing</option>
						<option value="Music: Vocal Arts">Music: Vocal Arts</option>
						<option value="Music: Keyboard">Music: Keyboard</option>
						<option value="Music: Percussion">Music: Percussion</option>
						<option value="Music: Winds">Music: Winds</option>
						<option value="Music: Strings">Music: Strings</option>
						<option value="Nursing: Accelerated">Nursing: Accelerated</option>
						<option value="B.S.Nursing: R.to B.S.N.">B.S.Nursing: R.to B.S.N.</option>
						<option value="B.S.Philosophy: Double Major">B.S.Philosophy: Double Major</option>
						<option value="Philosophy">Philosophy</option>
						<option value="Physics">Physics</option>
						<option value="Physics: Physics">Physics: Physics</option>
						<option value="Physics: Astrophysics">Physics: Astrophysics</option>
						<option value="Political Science: Politics and Government">Political Science: Politics and Government</option>
						<option value="Political Science: Public Policy and Management">Political Science: Public Policy and Management</option>
						<option value="Political Science: Law and Society">Political Science: Law and Society</option>
						<option value="Psychology Psychology: Honors">Psychology Psychology: Honors</option>
						<option value="Public Health">Public Health</option>
						<option value="Public Sector Management">Public Sector Management</option>
						<option value="Radiologic Sciences">Radiologic Sciences</option>
						<option value="Religious Studies: Double Major">Religious Studies: Double Major</option>
						<option value="Religious Studies">Religious Studies</option>
						<option value="Sociology">Sociology</option>
						<option value="Spanish: Hispanic Linguistics">Spanish: Hispanic Linguistics</option>
						<option value="Spanish: Translation and Interpretation">Spanish: Translation and Interpretation</option>
						<option value="Spanish: Literature">Spanish: Literature</option>
						<option value="Spanish: Language and Culture">Spanish: Language and Culture</option>
						<option value="Theatre">Theatre</option>
						<option value="Tourism Hospitality and Recreation Management">Tourism Hospitality and Recreation Management</option>
						<option value="Urban Studies and Planning">Urban Studies and Planning</option>
					</select>
				</th>
				<th>
					<select name="Time" style="width: 150px">
						<option value="Time">Time</option>
						<option value="Morning">Day</option>
						<option value="Afternoon">Afternoon</option>
						<option value="Night">Night</option>
					</select>
				</th>
			</tr>
			<tr>
				<td align="center" colspan="3">
					<input type="submit" value="Search" style="width: 25%">
					<input type="reset" value="Reset" style="width: 25%">	
				</td>
			</tr>
		</table>
		</form>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
