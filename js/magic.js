const speakers = [
{
    fullName: 'Andres Curcio',
    job: 'Software Tester',
    city: 'Buenos Aires',
    country: 'Argentina',
    twitter: 'https://twitter.com/aquintian',
    linkedin: 'https://ar.linkedin.com/in/andrescurcio',
    img: 'imgs/curcio_andres.jpeg',
},
{
    fullName: 'Ignacio Esmite',
    job: 'Software Engineer',
    city: 'Buenos Aires',
    country: 'Argentina',
    twitter: 'https://twitter.com/nachoesmite',
    linkedin: 'https://ar.linkedin.com/in/iesmite/es',
    img: 'imgs/esmite_ignacio.jpeg',
},
{
    fullName: 'Damián Meydac',
    job: 'Software Tester',
    city: 'Buenos Aires',
    country: 'Argentina',
    twitter: 'https://twitter.com/damimj',
    linkedin: 'https://www.linkedin.com/in/damianmeydacjean/es',
    img: 'imgs/meydac_damian.jpeg',
},
{
    fullName: 'Nicolás Arkhipenko',
    job: 'Lead Software Test Engineer',
    city: 'Buenos Aires',
    country: 'Argentina',
    twitter: 'https://twitter.com/nicoarkhipenko',
    linkedin: 'https://ar.linkedin.com/in/nicolás-arkhipenko-b2302425',
    img: 'imgs/arkhipenko_nicolas.jpeg',
}
];


const markup = `
<div class="row">
  <div class="col-sm-3">
    <div class="team-member text-center">
    ${speakers.map(speaker => `
      <img class="img-responsive img-circle" src=${speaker.img}>
      <h4>${speaker.fullName}</h4>
      <p class="text-muted">${speaker.job}</p>
        <ul class="list-inline social-buttons">
          <li><a target="_blank" href="${speaker.twitter}"><i class="fa fa-twitter"></i></a>
          </li>
          <li><a target="_blank" href="${speaker.linkedin}"><i class="fa fa-linkedin"></i></a>
          </li>
          </ul>
        </div> <!--cierro "team-member"-->
      </div> <!--cierro "col-sm-3"-->
</div> <!--cierro "row"-->
    `).join('')}`;
