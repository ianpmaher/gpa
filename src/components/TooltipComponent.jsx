import * as Tooltip from "@radix-ui/react-tooltip";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const TooltipComponent = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button aria-label="add row" className="">
              <PlusCircledIcon className="h-5 w-5 center-center" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="" sideOffset={5}>
              {children}
              <Tooltip.Arrow className="fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default TooltipComponent;
