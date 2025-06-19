import { Input } from "@/features/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative flex w-full">
      <Input className="pr-10" placeholder="Buscar..." />
      <Search className="text-muted-foreground absolute inset-y-0 right-3 my-auto h-5 w-5" />
    </div>
  );
};

export default SearchInput;
