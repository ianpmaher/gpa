import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipComponent = ({ contentText, children, className, side }) => {
  return (
    <div className={`${className}`}>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={200}>
          <Tooltip.Trigger asChild>
            <button aria-label={contentText} className="p-1">
              {children}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="text-lg bg-primary-dracula text-paper-bg dark:bg-paper-bg dark:text-paper-text text-wrap h-full w-fit"
              sideOffset={5}
              side={side}
            >
              {contentText}
              <Tooltip.Arrow className="fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default TooltipComponent;
