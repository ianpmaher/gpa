import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipComponent = ({ contentText, children, className }) => {
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
              className="text-xl bg-primary-dracula text-paper-bg dark:bg-paper-bg dark:text-paper-text"
              sideOffset={5}
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
