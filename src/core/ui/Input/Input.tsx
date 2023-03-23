import React, { DetailedHTMLProps, forwardRef, HTMLAttributes, InputHTMLAttributes } from "react"

import s from "./Input.module.css"
import clsx from "clsx"
import { Icon } from "../Icon"

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelClassName?: string
  startIcon?: {
    name: string
    className?: string
    onClick?: () => void
  }
  endIcon?: {
    name: string
    className?: string
    onClick?: () => void
  }
  error?: boolean
  label?: string
  readOnly?: boolean
  inputClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelClassName,
      startIcon,
      endIcon,
      error,
      inputClassName,
      label,
      readOnly = false,
      className,
      ...other
    },
    ref
  ) => {
    const _className = clsx(s.container, className)

    const _inputClassName = clsx(inputClassName, readOnly && s.readOnly, error && s.hasError)
    const _labelClassName = clsx(labelClassName, error && s.error)

    return (
      <div className={_className}>
        {label ? <label className={_labelClassName}>{label}</label> : null}
        {startIcon && (
          <Icon className={startIcon.className} onClick={startIcon.onClick} name={startIcon.name} />
        )}

        <input className={_inputClassName} ref={ref} readOnly={readOnly} {...other} />

        {endIcon && (
          <Icon className={endIcon.className} onClick={endIcon.onClick} name={endIcon.name} />
        )}
      </div>
    )
  }
)
