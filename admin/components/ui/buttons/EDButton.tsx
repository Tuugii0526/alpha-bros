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
import { DeleteButtom } from "./DeleteButtom";

type EDButtonProps = {
  dataName: string;
  dateID: string;
};

export const EDButton = ({ dataName, dateID }: EDButtonProps) => {
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
          <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-slate-100">
            <DeleteButtom dataName={dataName} dateID={dateID} />
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
