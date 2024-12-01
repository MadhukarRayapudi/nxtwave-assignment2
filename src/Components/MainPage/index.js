import "./index.css"

import { IoMdClose } from "react-icons/io";

import { GiMedicines } from "react-icons/gi";

import { FaGraduationCap } from "react-icons/fa";

import { MdOutlineMessage } from "react-icons/md";

const MainPage = () =>(
    <div className = "main-page">
        <nav className = "navbar">
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1732982462/image_45_rb5v3i.png" alt = "logo" className = "" />

            <ul className = "navbar-list-items-container">
                <li className = "list-item"> Home </li>
                <li className = "selected-list-item"> Find Doctors </li>
                <li className = "list-item"> About Us </li>
            </ul>

            <div className = "buttons-container">
                <button className = "login-btn"> Login </button>
                <button className = "signup-btn"> Sign-up </button>
            </div>
        </nav>

        <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733063879/Frame_2610266_cdpmv9.png" alt = "find-experts" className = "top-image" />

        <div className = "filters-container">
            <select id="Expertise" name="Expertise" className = "dropdown">
                <option value="" disabled selected>Expertise</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="gynecologist">Gynecologist</option>
                <option value="kids-specialist">Kids Specialist</option>
                <option value="psychologist">Psychologist</option>
            </select>

            <select className = "dropdown">
            <option value="" disabled selected>Gender</option>
                <option> Male </option>
                <option> Female </option>
                <option> Other </option>
            </select>

            <select className = "dropdown">
            <option value="" disabled selected>Fees</option>
            </select>

            <select className = "dropdown">
                <option value="" disabled selected>Language</option>
                <option> Telugu </option>
                <option> English </option>
                <option> Hindi </option>
            </select>
        </div>
        <hr />
        <ul className = "filters-list">
            <li className = "filter-list-item"> Hair care <IoMdClose /> </li>
            <li className = "filter-list-item"> Female <IoMdClose /> </li>
            <li className = "filter-list-item"> Rs.0-500 <IoMdClose /></li>
            <li className = "filter-list-item"> Hindi <IoMdClose /></li>
        </ul>

        <div className = "appointments-parent-container">
            <div className = "appointments-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733071001/Group_39487_fxzfn8.png" alt = "profile-pic" className = "profile-pic" />
                <h1 className = "doc-name"> Dr. Prerna Narang </h1>
                <p className = "designation"> <GiMedicines /> Male-Female Infertility </p>
                <p className = "designation"> <FaGraduationCap /> 7 years of Experience </p>
                <p className = "designation"> <MdOutlineMessage /> Speaks: English, Hindi, Marathi </p>

                <div className = "consultation-type-parent-container">
                    <div className = "consultation-type-container">
                        <p className = "consultation-type"> Video Consultation <br/> <span className = "consultation-fee"> ₹800 </span> </p>
                    </div>

                    <div className = "consultation-type-container">
                        <p className = "consultation-type"> Chat Consultation <br/> <span className = "consultation-fee"> Free </span> </p>
                    </div>
                </div>
                <button className = "view-profile-btn"> View Profile </button>
                <button className = "book-consultation-btn"> Book a consultation </button> 
            </div>

            <div className = "appointments-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733071001/Group_39487_fxzfn8.png" alt = "profile-pic" className = "profile-pic" />
                <h1 className = "doc-name"> Dr. Prerna Narang </h1>
                <p className = "designation"> <GiMedicines /> Male-Female Infertility </p>
                <p className = "designation"> <FaGraduationCap /> 7 years of Experience </p>
                <p className = "designation"> <MdOutlineMessage /> Speaks: English, Hindi, Marathi </p>

                <div className = "consultation-type-parent-container">
                    <div className = "consultation-type-container">
                        <p className = "consultation-type"> Video Consultation <br/> <span className = "consultation-fee"> ₹800 </span> </p>
                    </div>

                    <div className = "consultation-type-container">
                        <p className = "consultation-type"> Chat Consultation <br/> <span className = "consultation-fee"> Free </span> </p>
                    </div>
                </div>
                <button className = "view-profile-btn"> View Profile </button>
                <button className = "book-consultation-btn"> Book a consultation </button> 
            </div>

            <div className = "appointments-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733071001/Group_39487_fxzfn8.png" alt = "profile-pic" className = "profile-pic" />
                <h1 className = "doc-name"> Dr. Prerna Narang </h1>
                <p className = "designation"> <GiMedicines /> Male-Female Infertility </p>
                <p className = "designation"> <FaGraduationCap /> 7 years of Experience </p>
                <p className = "designation"> <MdOutlineMessage /> Speaks: English, Hindi, Marathi </p>

                <div className = "consultation-type-parent-container">
                    <div className = "consultation-type-container">
                        <p className = "consultation-type"> Video Consultation <br/> <span className = "consultation-fee"> ₹800 </span> </p>
                    </div>

                    <div className = "consultation-type-container">
                        <p className = "consultation-type"> Chat Consultation <br/> <span className = "consultation-fee"> Free </span> </p>
                    </div>
                </div>
                <button className = "view-profile-btn"> View Profile </button>
                <button className = "book-consultation-btn"> Book a consultation </button> 
            </div>
        </div>
    </div>
)

export default MainPage