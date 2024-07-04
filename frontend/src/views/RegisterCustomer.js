import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../context/AuthContext';
const RegisterCustomer = () => {
    //const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    const {createNewCustomer} = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          age: "",
          address: "",
          city: "",
          zip_code: ""

        },
        validationSchema: Yup.object().shape({
          name: Yup.string()
            .min(3, 'Username must be at least 3 characters long')
            .required('Required'),
          email: Yup.string()
            .email('Please enter a valid email')
            .required('Required'),
         phone: Yup.string()
            .min(10,'Too Short')
            .required('Required'),
        sex: Yup.string(),
        age: Yup.string(),
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        zip_code: Yup.string().required('Required'),
        }),
        onSubmit: values => {       
          //console.log(values);
          //console.log(localStorage.getItem('user'))
          //values.save_by=localStorage.getItem('user')
          createNewCustomer(values)
        },
      });
  return (
    <div className='container'>
      <br /><br /><br /><br />

        <h1 class="text-capitalize text-center mx-10 bg-dark text-white"> Register a new customer </h1>

        <form onSubmit={formik.handleSubmit}>
          
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="name1"> Name </label>
                    <input name="name" type="text" class="form-control" id="name1" 
                        placeholder="customer first and last name" onChange={formik.handleChange} 
                        value={formik.values.name}
                        />
                    {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>) : null}
                </div>

                <div class="form-group col-md-4">
                    <label for="email1"> Email </label>
                    <input name="email"  type="email" class="form-control" id="email1" placeholder="customer email" 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                         <div>{formik.errors.email}</div>) : null}
                </div>

                <div class="form-group col-md-2">
                    <label for="phone1"> Phone </label>
                    <input name="phone" type="text" class="form-control" id="phone1"
                        placeholder="customer phone number" 
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div>{formik.errors.phone}</div>) : null}
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="sex1">Sex</label>
                    <select name="sex" class="form-control" id="sex1"
                    
                    >
                        <option> Choose the gender .. </option>
                        <option value="M">Male</option>
                        <option value="F">Feminine</option>
                    </select>
                   
                </div>

                <div class="form-group col-md-6">
                    <label for="age1">Age</label>
                    <select name="age" class="form-control" id="age1"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    >
                        <option> Choose the age range .. </option>
                        <option value="0-15">0-15</option>
                        <option value="0-15">15-25</option>
                    </select>
                    {formik.touched.age && formik.errors.age ? (
                            <div>{formik.errors.age}</div>) : null}
                </div>

            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="addres"> Address </label>
                    <input name="address" type="text" class="form-control" id="addres"
                        placeholder="Customer address" 
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div>{formik.errors.address}</div>) : null}
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="city1"> City </label>
                    <input name="city" type="text" class="form-control" id="city1" placeholder="customer city" 
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                    <div>{formik.errors.city}</div>) : null}
                </div>

                <div class="form-group col-md-6">
                    <label for="zip1"> Zip code </label>
                    <input name="zip_code" type="text" class="form-control" id="zip1"
                        placeholder="customer zip code required" 
                        onChange={formik.handleChange}
                        value={formik.values.zip_code}
                        />
                        {formik.touched.zip_code && formik.errors.zip_code ? (
                        <div>{formik.errors.zip_code}</div>) : null}
                </div>
            </div>

            <button type="submit" class="btn btn-primary"> Save</button>

        </form>

<br /><br /><br /><br />
    </div>
  )
}

export default RegisterCustomer
