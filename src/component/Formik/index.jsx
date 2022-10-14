import React from "react";
import ReactDOM from "react-dom";
import { Formik , Field , Form } from "formik";


let Formi = () => (
    <div>
        <Formik
        initialValues={{
            firstName: "Shariq",
            lastName: "Siddiqui",
            email: "SS@gmail.com"

        }}
        onSubmit={(values) => {
            console.log(values);
        }}
        >
            <Form>
                <label htmlFor="firstName">Name:</label>
                <Field id="firstName" name="firstName" placeholder="john" />
                <br/>

                <label htmlFor="lastName">SurName:</label>
                <Field id="lastName" name="lastName" placeholder="cena" />
                <br/>

                <label htmlFor="email">Email:</label>
                <Field id="email" name="email" placeholder="john@gmail.com" type="email" />
                <br/>

                <button type="submit">Submit</button>
            </Form>
        </Formik>


    </div>
);
export default Formi;