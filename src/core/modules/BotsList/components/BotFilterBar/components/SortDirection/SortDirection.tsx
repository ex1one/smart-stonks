import { Icon } from "src/core/ui"

import s from "./SortDirection.module.css"
import clsx from "clsx"

interface SortDirectionProps {
  onStatsPageChange: (direction: "increase" | "decrease") => void
}

export const SortDirection = ({ onStatsPageChange }: SortDirectionProps) => {
  return (
    <div className={s.controllContainer}>
      <Icon
        name="arrow-left"
        className={clsx(
          s.controllArrow,
          "transition duration-300 hover:text-gray-900 dark:hover:text-purple-dark-light"
        )}
        onClick={() => onStatsPageChange("decrease")}
      />
      <Icon
        name="arrow-right"
        className={clsx(
          s.controllArrow,
          "transition duration-300 hover:text-gray-900 dark:hover:text-purple-dark-light"
        )}
        onClick={() => onStatsPageChange("increase")}
      />
    </div>
  )
}
