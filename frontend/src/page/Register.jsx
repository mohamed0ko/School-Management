import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Register({ className }) {
    const playlists = ["playlist1", "playlist2"];

    return (
        <div className={cn("pb-12", className)}>
            <div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        <Link
                            to="/AdminDashpored"
                            className="nav-link align-middle px-0"
                        >
                            Admin Dashpored
                        </Link>
                    </h2>
                    <div className="space-y-1">
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <Link
                                to="/AdminDashpored/ManageParent"
                                className="nav-link align-middle px-0"
                            >
                                <i className="fa-solid fa-user-plus"></i> &nbsp;
                                create
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
