import { createContext } from 'react'
import { FieldErrors, RegisterOptions } from 'react-hook-form'
import { FormItemLayout } from './form-item'

enum LayoutOptions {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  INLINE = 'inline',
}

const FormContext = createContext<{
  register: (rules?: RegisterOptions) => void
  errors: FieldErrors
  layout: LayoutOptions
  formLabelCol?: FormItemLayout
  formWrapperCol?: FormItemLayout
}>({
  register: () => {},
  errors: () => {},
  layout: LayoutOptions.VERTICAL,
  formLabelCol: undefined,
  formWrapperCol: undefined,
})

export default FormContext
