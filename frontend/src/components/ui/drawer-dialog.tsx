import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import useMediaQuery from "../../hooks/useMediaQuery";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

function DrawerDialog({
  open,
  setOpen,
  title,
  description,
  children,
  footer,
}: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>

            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-left">{title}</DrawerTitle>
          <DrawerDescription className="text-left">
            {description}
          </DrawerDescription>

          <DrawerClose asChild>
            <Button variant="ghost" className="absolute right-4 top-4">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="px-4 mb-4">{children}</div>
        {footer && <DrawerFooter className="pt-2">{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDialog;
