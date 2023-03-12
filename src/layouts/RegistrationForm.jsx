import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Please enter your name";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Please enter your last name";
    }
    if (!formData.address) {
      validationErrors.address = "Please enter your address";
    }
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      validationErrors.phone = "Please enter your phone number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
    }
    console.log(Error)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Nombre">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="Apellido">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label htmlFor="direccion">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <button type="submit">Registrar</button>
    </form>
  
  );
}
export default RegistrationForm;