import React, { useState } from "react";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";

const schema = z.object({
    name: z
        .string()
        .min(2, "name must be at least 2 characters")
        .max(30, "Maximum length is 30 characters"),
    description: z
        .string()
        .min(2, "description must be at least 2 characters")
        .max(255, "Maximum length is 30 characters"),
});

function AdminCourseUnserForm({ SubmitCreate, value }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        ...(value || {}),
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const result = schema.safeParse(formData);
        if (!result.success) {
            const formattedErrors = result.error.errors.reduce((acc, error) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});
            setErrors(formattedErrors);
            return;
        }

        try {
            const response = await SubmitCreate(formData);

            if (response.status === 200) {
                toast.success(
                    value === "create"
                        ? "Course created successfully!"
                        : "Course updated successfully!"
                );

                setFormData({
                    name: "",
                    description: "",
                });
            } else {
                toast.error("Failed to submit data. Please try again.");
            }
        } catch (error) {
            console.error("API error:", error);
            toast.error("An error occurred. Please try again later.");

            setErrors({
                api: "Failed to submit data. Please try again later.",
            });
        }
    };

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <form className="row g-3" onSubmit={handleSubmit}>
                {/* name */}
                {errors.exists && (
                    <p style={{ color: "red", margin: "auto" }}>
                        {errors.exists}
                    </p>
                )}
                <ToastContainer />
                <div className="col-md-17">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                </div>

                {/* Lastname */}
                <br />
                <div className="col-md-17">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {errors.description && (
                        <p style={{ color: "red" }}>{errors.description}</p>
                    )}
                </div>

                {/* Submit */}
                <div className="col-md-17">
                    <button className="btn btn-primary" type="submit">
                        {value ? "Update" : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminCourseUnserForm;
