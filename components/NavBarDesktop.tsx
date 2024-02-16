import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"



export function NavBarDesktop() {
    return (
        <>
            <Menubar className="border-solid border-slate-950 shadow-xl">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer ">INICIO</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer ">PRODUCTOS</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer ">BLOG</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer ">CONTACTO</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </>
    )
}
