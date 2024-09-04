import * as Select from "@radix-ui/react-select";

const SelectMenu = ({ data, selected, onChange }) => {
  return (
    <Select.Root value={selected} onValueChange={onChange}>
      <Select.Trigger
        aria-label="Select an item"
        className="inline-flex items-center justify-between text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1"
      >
        <Select.Value />
        <Select.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.28z"
              clipRule="evenodd"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md text-black p-1">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {data.map((item) => (
              <Select.Item key={item} value={item} className="active:ring focus:bg-sky-200">
                <Select.ItemText className="text-sm text-gray-900">
                  {item}
                </Select.ItemText>
                <Select.ItemIndicator>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 scale-50 float-end"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill="none"
                      stroke="currentColor"
                    />
                  </svg>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectMenu;
