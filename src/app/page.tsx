

//import { Counter } from "@/components/Counter";
import { HelloWorld } from "@/components/HelloWorld";
import { Wrapper } from "@/components/Wrapper";

export default async function Index() {
    console.log("Rendering Home")
    return (
        <div className="bg-orange-300 grow overflow-y-auto flex flex-col gap-4 items-center justify-center">
            <HelloWorld></HelloWorld>
            <Wrapper>
            </Wrapper>
        </div>
    )
}
