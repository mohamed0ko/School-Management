import React, { useState } from "react";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import ParentApi from "../../servies/api/Parent/ParentApi";

const schema = z.object({
    fristname: z
        .string()
        .min(2, "fristname must be at least 2 characters")
        .max(30, "Maximum length is 30 characters"),
    lastname: z
        .string()
        .min(2, "Lastname must be at least 2 characters")
        .max(30, "Maximum length is 30 characters"),
    date_of_birth: z.string().nonempty("Date of birth is required"),
    gender: z.enum(["m", "f"], "Gender must be 'M' or 'F'"),
    bloode_type: z.enum(
        ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
        "Invalid blood type"
    ),
    address: z
        .string()
        .max(255, "Maximum length is 255 characters")
        .min(2, "address must be at least 2 characters"),
    phone: z.string().length(10, "Phone number must be exactly 10 characters"),
    email: z
        .string()
        .email("Invalid email address")
        .max(30, "Maximum length is 30 characters")
        .min(2, "email must be at least 2 characters"),
    password: z.string(),
});

function AdminParentCreate() {
    const [formData, setFormData] = useState({
        fristname: "",
        lastname: "",
        date_of_birth: "",
        gender: "",
        bloode_type: "",
        address: "",
        phone: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*   setIsSubmitting(true); */ // تفعيل حالة التحميل
        setErrors({}); // مسح الأخطاء السابقة

        // التحقق باستخدام Zod
        const result = schema.safeParse(formData);
        if (!result.success) {
            // استخراج الأخطاء إذا لم ينجح التحقق
            const formattedErrors = result.error.errors.reduce((acc, error) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});
            setErrors(formattedErrors);
            /*   setIsSubmitting(false); */ // إلغاء حالة التحميل
            return; // إنهاء العملية هنا
        }

        // إذا كان التحقق ناجحًا
        try {
            const response = await ParentApi.create(formData);
            if (response.status === 201) {
                console.log(response.data);
                toast.success("Parent created successfully!");
                setFormData({
                    fristname: "",
                    lastname: "",
                    date_of_birth: "",
                    gender: "",
                    bloode_type: "",
                    address: "",
                    phone: "",
                    email: "",
                    password: "",
                });
            } else {
                console.error("Unexpected response status:", response.status);
                toast.error("Failed to submit data. Please try again.");
            }
        } catch (error) {
            console.error("API error:", error);
            toast.error("An error occurred. Please try again later.");
            setErrors({
                api: "Failed to submit data. Please try again later.",
            });
            if (error.response.status === 422) {
                setErrors({ exists: "Email or Phone already exists" });
            }
            // إلغاء حالة التحميل
        }
    };

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <form className="row g-3" onSubmit={handleSubmit}>
                {/* fristname */}
                {errors.exists && (
                    <p style={{ color: "red", margin: "auto" }}>
                        {errors.exists}
                    </p>
                )}
                <ToastContainer />
                <div className="col-md-6">
                    <label htmlFor="fristname" className="form-label">
                        fristname
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fristname"
                        name="fristname"
                        value={formData.fristname}
                        onChange={handleChange}
                    />
                    {errors.fristname && (
                        <p style={{ color: "red" }}>{errors.fristname}</p>
                    )}
                </div>

                {/* Lastname */}
                <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label">
                        Lastname
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                    {errors.lastname && (
                        <p style={{ color: "red" }}>{errors.lastname}</p>
                    )}
                </div>

                {/* Date of Birth */}
                <div className="col-md-6">
                    <label htmlFor="date_of_birth" className="form-label">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                    />
                    {errors.date_of_birth && (
                        <p style={{ color: "red" }}>{errors.date_of_birth}</p>
                    )}
                </div>

                {/* Blood Type */}
                <div className="col-md-6">
                    <label className="form-label">Blood Type</label>
                    <select
                        className="form-select"
                        name="bloode_type"
                        value={formData.bloode_type}
                        onChange={handleChange}
                    >
                        <option>Select Blood Type</option>
                        {["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"].map(
                            (bloodType) => (
                                <option key={bloodType} value={bloodType}>
                                    {bloodType}
                                </option>
                            )
                        )}
                    </select>
                    {errors.bloode_type && (
                        <p style={{ color: "red" }}>{errors.bloode_type}</p>
                    )}
                </div>

                {/* Address */}
                <div className="col-md-6">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && (
                        <p style={{ color: "red" }}>{errors.address}</p>
                    )}
                </div>

                {/* Phone */}
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && (
                        <p style={{ color: "red" }}>{errors.phone}</p>
                    )}
                </div>

                {/* Email */}
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <p style={{ color: "red" }}>{errors.password}</p>
                    )}
                </div>
                {/* Gender */}
                <div className="col-md-6">
                    <label>Gender</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="m"
                            checked={formData.gender === "m"}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">M</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="f"
                            checked={formData.gender === "f"}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">F</label>
                    </div>
                    {errors.gender && (
                        <p style={{ color: "red" }}>{errors.gender}</p>
                    )}
                </div>

                {/* Submit */}
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminParentCreate;
