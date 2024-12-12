import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { EditIcon } from "../icons";
import { EditButton } from "./EditButton";

export const EDButton = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <EditIcon />
        </MenubarTrigger>
        <MenubarContent>
          <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-slate-100">
            <EditButton />
          </div>
          <MenubarItem>Устгах</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
