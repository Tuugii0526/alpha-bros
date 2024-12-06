import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const Search = () => {
  return (
    <div className="w-[700px] bg-[#ffff]  h-[60px] mx-auto rounded-3xl">
      <div className="flex items-center justify-center gap-2">
        <div>
          <Select>
            <SelectTrigger className=" bg-white w-[180px]">
              <SelectValue
                className="text-black"
                placeholder="what are you going"
              />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectGroup className="text-black">
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className=" bg-white w-[180px]">
              <SelectValue
                className="text-black"
                placeholder="what are you going"
              />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black">
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className=" bg-white w-[180px]">
              <SelectValue
                className="text-black"
                placeholder="what are you going"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-white text-black">
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-[#4F46E5]">
          <img src="/Search.png" alt="" />
        </div>
      </div>
    </div>
  );
};
