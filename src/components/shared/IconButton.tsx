import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function IconButton({ children, className }: IconButtonProps) {
  return (
    <Button variant="secondary" size="icon" className={cn("size-8", className)}>
      {children}
    </Button>
  );
}
