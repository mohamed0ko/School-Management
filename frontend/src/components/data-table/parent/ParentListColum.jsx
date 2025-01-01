import { data } from "react-router-dom";

export const ParentListColum = [
    {
        accessorKey: "id",
        header: "#ID",
        cell: ({ row }) => {
            const id = row.getValue("id");
            return <div className="text-center font-medium">{id}</div>;
        },
    },
    {
        accessorKey: "fristname",
        header: "Frist Name",
        cell: ({ row }) => {
            const fristname = row.getValue("fristname");
            return <div className="text-center font-medium">{fristname}</div>;
        },
    },
    {
        accessorKey: "lastname",
        header: "Last Name",
        cell: ({ row }) => {
            const lastname = row.getValue("lastname");
            return <div className="text-center font-medium">{lastname}</div>;
        },
    },
    {
        accessorKey: "date_of_birth",
        header: "Date Of Birth",
        cell: ({ row }) => {
            const date_of_birth = row.getValue("date_of_birth");
            return (
                <div className="text-center font-medium">{date_of_birth}</div>
            );
        },
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => {
            const value = row.getValue("gender");
            const gender = value === "f" ? "Male" : "Female";
            return <div className="text-center font-medium">{gender}</div>;
        },
    },
    {
        accessorKey: "bloode_type",
        header: "Bloode Type",
        cell: ({ row }) => {
            const bloode_type = row.getValue("bloode_type");
            return <div className="text-center font-medium">{bloode_type}</div>;
        },
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: ({ row }) => {
            const address = row.getValue("address");
            return <div className="text-center font-medium">{address}</div>;
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
            const phone = row.getValue("phone");
            return <div className="text-center font-medium">+212-{phone}</div>;
        },
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => {
            const email = row.getValue("email");
            return <div className="text-center font-medium">{email}</div>;
        },
    },
    {
        accessorKey: "updated_at",
        header: "Update At",
        cell: ({ row }) => {
            const date = row.getValue("updated_at");
            console.log(date);
            const formatted = new Date(date).toString();
            return <div className="text-center font-medium">{formatted}</div>;
        },
    },
];
