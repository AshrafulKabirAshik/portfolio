import image_1 from './images/img_1.png';
import image_2 from './images/img_2.png';
import image_3 from './images/img_3.png';
import image_4 from './images/img_4.png';
import './App.css';




function App() {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="main_container">
      <div className="header_row">
        <div className="header_column header_start_text">ashrafulkabirashik.</div>

        <div className="header_column">
          <div className="box_rounded_corner">
            <div className="div_available_box">
              <div className="div_available_circel" />
              <div className="div_available_title">AVAILABLE FOR WORK</div>
            </div>
          </div>
        </div>

        <div className="header_column header_end_text">Menu</div>
      </div>

      <h1 className="font_title">Hi, I Am Ashik.<br />I Design, Code And Grow Android Software.</h1>

      <h1 className="font_subtitle">I'am a Degital Product Designer and Software Developer who enjoy turning problems and <br /> opportunities into simple interface through design and code.</h1>

      <div className="box_rounded_corner top_gap_40">
        <a href="https://github.com/AshrafulKabirAshik" target="_blank" rel="noopener noreferrer" className="icon-github icon_style"></a>
        <a href="https://www.linkedin.com/in/md-ashraful-kabir-ashik-46a4731ba/" target="_blank" rel="noopener noreferrer" className="icon-linkedin icon_style"></a>
        <a href="https://twitter.com/AshrafulKabirA2" target="_blank" rel="noopener noreferrer" className="icon-twitter icon_style"></a>
        <a href="https://www.facebook.com/profile.php?id=100006154697540" target="_blank" rel="noopener noreferrer" className="icon-facebook icon_style"></a>
        <a href="https://www.instagram.com/ashraful_kabir_ashik/" target="_blank" rel="noopener noreferrer" className="icon-instagram icon_style"></a>
      </div>

      <button className="button_rounded_corner shadow" onClick={handleScroll}>Hire Me</button>

      <h1 className='font_title_thin'>Project Showcase</h1>

      <div className='div_project_showcase'>
        <div className='div_project_one'>
          <img className='img_project' src={image_1} alt="fireSpot" />
        </div>

        <div className='div_project_vertical'>
          <div className='div_project_two '>

            <img className='img_project' src={image_2} alt="fireSpot" />
          </div>
          <div className='div_project_three '>

            <img className='img_project' src={image_3} alt="fireSpot" />
          </div>
        </div>

        <div className='div_project_one'>
          <img className='img_project' src={image_4} alt="fireSpot" />
        </div>
      </div>

     <button className="button_rounded_corner_default shadow top_gap_40">Show More</button>

      <div className='div_content_vertical top_gap_120'>
        <div className='div_details'>
          <h1 className='font_title_small_bold'>Thinks I Do</h1>
          <p className='font_p'>Passionate Android developer with a flair for crafting innovative and user-centric mobile applications. Proficient in Java and Kotlin, I bring a wealth of experience in creating sleek, responsive, and feature-rich apps. Dedicated to staying abreast of the latest Android technologies and design principles, I thrive on solving complex challenges and delivering seamless user experiences. With a keen eye for detail and a commitment to quality, I excel in collaborative environments, where my skills in problem-solving and creativity contribute to the success of every project. Eager to contribute my expertise to the ever-evolving world of Android development.</p>
        </div>
        <div className='div_cv box_rounded_corner'>
          <h1 className='font_title_small_bold'>Skills</h1>
          <p className='font_p'>Android/Java/Kotlin/ReactJs/Ui Ux/Html/Css/Js/Photoshop/<br />PremierePro</p>
          <button className="button_rounded_corner_default shadow" onClick={(e) => { window.open("https://drive.google.com/u/0/uc?id=1siVPDZ8Uoj0ZR9U2NCm_mIQ5Q5XXIgnF&export=download", "_blank"); }}>Download CV</button>
        </div>
      </div>

      <h1 className='font_title_thin top_gap_120'>Let's Talk About Your Project.</h1>
      <h1 className='font_subtitle'>Somethis on your mind? Get in touch and let's chat!</h1>

      <div className='div_project_vertical'>
        <button className="button_rounded_corner_default shadow">Call Me</button>
        <button className="button_rounded_corner_default left_gap_20">Send Me An Mail</button>
      </div>

      <div className="box_rounded_corner top_gap_40">
        <a href="https://github.com/AshrafulKabirAshik" target="_blank" rel="noopener noreferrer" className="icon-github icon_style"></a>
        <a href="https://www.linkedin.com/in/md-ashraful-kabir-ashik-46a4731ba/" target="_blank" rel="noopener noreferrer" className="icon-linkedin icon_style"></a>
        <a href="https://twitter.com/AshrafulKabirA2" target="_blank" rel="noopener noreferrer" className="icon-twitter icon_style"></a>
        <a href="https://www.facebook.com/profile.php?id=100006154697540" target="_blank" rel="noopener noreferrer" className="icon-facebook icon_style"></a>
        <a href="https://www.instagram.com/ashraful_kabir_ashik/" target="_blank" rel="noopener noreferrer" className="icon-instagram icon_style"></a>
      </div>

      <h1 className='font_footer top_gap_120'>Copyright © 2023 | Made by MdAshrafulKabirAshik</h1>

    </div>
  );
}

export default App;
