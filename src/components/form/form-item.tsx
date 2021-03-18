import React, { cloneElement, useContext, useMemo } from 'react'
import clsx from 'clsx'
import { RegisterOptions } from 'react-hook-form'
import FormContext from './form-context'
import { LayoutOptions } from './form'

type FormItemRules = RegisterOptions & { message: string }
export type FormItemLayout = {
  span?: number
  offset?: number
}

/**
 * FormItem Properties
 */
export type FormItemProps = {
  /** Form Field to render within FormItem component */
  children: React.ReactElement
  /** Customize FormItem styles using className */
  className?: string
  /** Field name */
  name?: string
  /** Label Text for Form Field */
  label?: string
  /** The layout for label. You can set `span` `offset` to something like `{span: 1, offset: 1}`.
   *  You can set labelCol on Form which will not affect nest Item. If both exists, use Item first.
   */
  labelCol?: FormItemLayout
  /** Rules for field validation */
  rules?: FormItemRules[]
  /** The layout for input controls, same as `labelCol`.
   * You can set wrapperCol on Form which will not affect nest Item. If both exists, use Item first
   */
  wrapperCol?: FormItemLayout
}

export function FormItem({
  children,
  className,
  name,
  label,
  labelCol,
  rules = [],
  wrapperCol,
}: FormItemProps) {
  const { register, errors, layout, formLabelCol, formWrapperCol } = useContext(
    FormContext,
  )

  const labelColWidth = useMemo(() => {
    const DEFAULT_LABEL_WIDTH = 1
    if (labelCol?.span) {
      return labelCol.span
    } else if (formLabelCol?.span) {
      return formLabelCol.span
    }
    return DEFAULT_LABEL_WIDTH
  }, [labelCol, formLabelCol])

  const labelColOffset = useMemo(() => {
    const DEFAULT_LABEL_OFFSET = 0
    if (labelCol?.offset) {
      return labelCol.offset
    } else if (formLabelCol?.offset) {
      return formLabelCol.offset
    }
    return DEFAULT_LABEL_OFFSET
  }, [labelCol, formLabelCol])

  const wrapperColWidth = useMemo(() => {
    const DEFAULT_WRAPPER_WIDTH = 5
    if (wrapperCol?.span) {
      return wrapperCol.span
    } else if (formWrapperCol?.span) {
      return formWrapperCol.span
    }
    return DEFAULT_WRAPPER_WIDTH
  }, [formWrapperCol, wrapperCol])

  const wrapperColOffset = useMemo(() => {
    const DEFAULT_WRAPPER_OFFSET = 0
    if (wrapperCol?.offset) {
      return wrapperCol.offset
    } else if (formWrapperCol?.offset) {
      return formWrapperCol.offset
    }
    return DEFAULT_WRAPPER_OFFSET
  }, [formWrapperCol, wrapperCol])

  const validationScehma = useMemo(() => {
    const schema: any = {}
    rules.forEach((element) => {
      schema[Object.keys(element)[0]] = Object.values(element)[0]
    })
    return schema
  }, [rules])

  return (
    <div
      className={clsx(
        layout === LayoutOptions.VERTICAL
          ? 'flex flex-col space-y-2 w-full'
          : layout === LayoutOptions.HORIZONTAL
          ? 'grid grid-cols-1 space-y-2 lg:space-y-0 lg:grid-cols-6 items-center'
          : layout === LayoutOptions.INLINE
          ? 'flex items-center space-x-4'
          : undefined,
        className,
      )}
    >
      {label ? (
        <label
          htmlFor={name}
          className={clsx(
            'text-sm font-semibold text-gray-600',
            layout === LayoutOptions.HORIZONTAL
              ? `lg:col-span-${labelColWidth} lg:col-start-${labelColOffset} lg:text-right lg:px-2`
              : undefined,
          )}
        >
          {label}{' '}
          {layout === LayoutOptions.HORIZONTAL ||
          layout === LayoutOptions.INLINE
            ? ':'
            : null}
        </label>
      ) : null}
      <div
        className={clsx(
          layout === LayoutOptions.HORIZONTAL
            ? `lg:col-span-${wrapperColWidth} lg:col-start-${wrapperColOffset}`
            : undefined,
        )}
      >
        {cloneElement(children, {
          name,
          ref: name ? register(validationScehma) : undefined,
        })}

        {name &&
          rules
            ?.filter((rule) => {
              return errors[name]?.type === Object.keys(rule)[0]
            })
            .map((rule) => (
              <div className="absolute text-xs text-red-500" key={rule.message}>
                {rule.message}
              </div>
            ))}
      </div>
    </div>
  )
}
