
import { ApplicationInfos } from "@/components/ApplicationInfos";
import { EditUsername } from "@/components/EditUsername";

export default function About() {
    return (
        <div className="bg-orange-300 grow flex flex-col">
            <div>About page</div>
                <ApplicationInfos></ApplicationInfos>
                <EditUsername></EditUsername>
        </div>
    )
}
