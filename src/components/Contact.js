import './Profile.css'
import { useFormik } from 'formik';
import * as Yup from "yup"

function Contact(){
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            proposal: "Freenlance",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Enter a name with more than 3 characters").required("Requiered"),
            message: Yup.string().min(25, "Message must have a minimum of 25 characters").required("Requiered"),
            email: Yup.string().email("Invalid email address").required("Requiered")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return(
        <div className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
            <div className="content contacts">
                <div className="title">Get in Touch</div>
                <div className="row">
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                        <p>
                            Do you have any questions or projects you would like to carry out?
                            Let’s have a chat!
                        </p>
                        <div className="info-list">
                            <ul>
                                <li><strong>Email .  </strong> <a href="mailto: cibercarlossv@gmail.com">cibercarlossv@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>

            </div>

            <div className="content contacts">
                <div className="title">Contact Form</div>
                        <div className="contact_form">
                            <form className="contact-form" onSubmit={formik.handleSubmit} >    
                                        <div className="group-val">
                                            <input  
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Full Name*"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                    />
                                            {formik.touched.name && formik.errors.name ? <p className="text-xs text-red-500 pt-1"> {formik.errors.name} </p> : null }
                                        </div>
                                        
                                        <div className="group-val">
                                            <input 
                                                    id="email"
                                                    name="email"
                                                    type="text"
                                                    placeholder="E-mail*"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                />
                                                 {formik.touched.email && formik.errors.email ? <p className="text-xs text-red-500 pt-1"> {formik.errors.email} </p> : null }
                                        </div>
                                        <div className="group-val">
                                            <p className="type-enquiry">Type of Enquiry*</p>
                                            <select 
                                                    name="proposal"
                                                    value={formik.values.proposal}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}>
                                                <option value="Freelance">Freelance Project Proposal</option>
                                                <option value="Other">Other</option>
                                        </select>

                                        </div>
                                        <div className="group-val">
                                            <textarea 
                                                    id="message"
                                                    name="message"
                                                    placeholder="Message*"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.message}
                                                >  
                                                </textarea>
                                                {formik.touched.message && formik.errors.message ? <p className="text-xs text-red-500 pt-1"> {formik.errors.message} </p> : null }
                                        </div>
                                <div className="align-left">
                                     <button type="submit" className="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    <div className="clear"></div>
            </div>
        </div>
    </div>
    )
}

export default Contact;