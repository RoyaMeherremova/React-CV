import image from './assets/images/roya.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <div className='container my-2'>
        <div className='resume'>
          <div className='left-side'>
            <div className='img-div'>
              <img src={image} />
            </div>
            <div className='name-div'>
              <h5 className='myName'>ROYA MEHERREMOVA</h5>
              <h6 className='carier'>Full-Stack Developer</h6>
              <div className='contact'>
                <p className='icon'><FontAwesomeIcon icon={faPhone} /> <span>Contact</span></p>
                <p>+994514655353
                  royaam@code.edu.az
                   <p>linkedin</p>
                </p>
              </div>
              <div className='language'>
                <p className='icon'><FontAwesomeIcon icon={faGlobe} /> <span>Language</span></p>
                <div className='languages'>
                  <p>Azerbaijan - Native</p>
                  <p>English - Intermediate</p>
                  <p>Russian - Native</p>
                  <p>Turkish - Intermediate</p>
                </div>
              </div>
              <div className='refrence'>
                 <span className='ref'>REFRENCES
                  </span>
                  <p className='name-ref'>Cavid Bashirov</p>
                <p className='icon'><FontAwesomeIcon icon={faPhone} /> <span className='phone'>+99455613883</span></p>
           
              </div>
            </div>
          </div>
          <div className='right-side'>
            <div className='about'>
              <p className='icon'><FontAwesomeIcon icon={faUser} /> <span>About me</span></p>
              <p className='info-box'>I have deep knowledge od C#,ASP.NET Core,SQL,algoritms,and data structures.Additionally,I have good knowledge of front-end and back-end tecnologies,including React,HTML,CSS,JavaScript,and jQuery.I'd be more than happy to discuss with you your project and deliver you high-quality solutions that meet your needs.</p>
            </div>
            <div className='education'>
              <h4>Education</h4>
              <div className='education-name'>
                <h6>Baku Computer College /</h6>
                <p >Infromation Technology and Systems</p>
              </div>
              <p className='time'>May 2009</p>
              <div className='education-name' style={{ marginTop: "-10px" }}>
                <h6>Code Academy /</h6>
                <p>Programmer</p>
              </div>
              <p className='time'>July 2023</p>
            </div>
            <div className='skils'>
            <h4>Skills</h4>
            <ul>
              <li>
                Visual Design Skills
              </li>
              <li>
               Knowledgable in User Interface/ User Experience
              </li>
              <li>
               Adaptability
              </li>
              <li>
              Database Management
              </li>
              <li>
              Strong Leadership Skills
              </li>
              <li>
              Programming
              </li>
            </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
