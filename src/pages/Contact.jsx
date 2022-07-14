import {useEffect} from "react";
import '../components/Styles/Contact.css'
import { Container, Row, Col} from 
"react-bootstrap";
import { contactConfig } from "../sliderData"
import { motion } from 'framer-motion';




const containerVariants = {
	hidden: { 
	  opacity: 0, 
	  x: '100vw',
	  transition: {
		staggerChildren: 0.5,
	  } 
	},
	visible: { 
	  opacity: 1, 
	  x: 0,
	  transition: { 
		type: 'spring',
		mass: 0.4,
		damping: 8,
		staggerChildren: 0.4,
		when: "beforeChildren",
	  }
	},
  };

const Contact = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  className='ConT'
  >   
         <div className="contact-CC">
         <div className="picture">
          <div><div className="overlay"></div>
            <h3>Talk to a Human</h3>
    <p>You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At Choice Screening, we provide the exceptional service we'd want to experience ourselves!</p>
    </div></div>
         <div className="container-contact">
           <span className="left ITEM">
           <h2>
     Thunder Bolt Screening strives to provide the best service possible with every contact!
     </h2>
           
     <p>We operate in an industry built on trust. This can only be achieved through communication and experienced support – from the first contact past our eight-year anniversary.</p>
     <h3 className ='h3'>At Choice you always talk to a human!</h3>

     <p>Have questions about background screening? Our entire team receives specialized training regularly to ensure you're receiving the best information possible. From basic questions to complex compliance inquiries, we're here to help!</p>
     <br/>
     <p>Interested in learning more about our services? Our Account Executives take the time to discuss your existing background screening program and help you make smart decisions that best meet your needs. </p>

           </span>
           <span className="line"></span>
           <span className="right ITEM">
           <h2>Corporate Office</h2>
    <p>Bassan Plaza Plot 759, Independent Avenue Central Area District, FCT Abuja-Nigeria</p>
   <span>
    <h2>Direct Contact</h2>
    <p>Phone: +234 906 7077 000,</p>
    <p>Toll Free: +234 705 6560 766,</p>
    <p>+234 703 9750 210</p>
    <p>Email: info@tbw.com</p>
   </span>
   <span>
    <h2>Departments</h2>
    <p>customerservice@tbw.com</p>
    <p>accounservice@tbw.com</p>
    <p>sales@tbw.com</p>
           </span>
   </span>
         </div>
         </div>
        

      <Container>
     <Row className="mb-5 mt-3">
       <Col lg="8">
         <h1 className="display-4 mb-4">Contact Me</h1>
         <hr className="t_border my-4 ml-0 text-left" />
       </Col>
     </Row>
     <Row className="sec_sp">
       <Col lg="5" className="mb-5">
         <h3 className="color_sec py-4">Get in touch</h3>
         <address>
           <strong>Email:</strong>{" "}
           <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
             {contactConfig.YOUR_EMAIL}
           </a>
           <br />
           <br />
           {contactConfig.hasOwnProperty("YOUR_FONE") ? (
             <p>
                <p><strong>Phone:</strong> +234 906 7077 000,</p>
                  <p> +234 705 6560 766,</p>
                  <p>+234 703 9750 210</p>
             </p>
           ) : (
             ""
           )}
         </address>
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <form  className="contact__form w-100">
           <Row className="m-2">
             <Col lg="6" className="form-group">
               <input
                 className="form-control "
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </Col>
             <Col lg="6" className="form-group">
               <input
                 className="form-control rounded-0"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </Col>
           </Row>
           <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
           <br />
           <Row>
             <Col lg="12" className="form-group">
               <button className="btn ac_btn" type="submit"> 
               Send
               </button>
             </Col>
           </Row>
         </form>
       </Col>
     </Row>
   </Container> 
     </motion.div>
}


export default Contact;

