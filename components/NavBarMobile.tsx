import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"


export function NavBarMobile() {

  return (

    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-solid border-gray-300 shadow-xl p-3 focus:none"><Menu /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 lg:hidden" >
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              Inicio
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Productos
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Blog
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Contacto
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="color-black" />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
