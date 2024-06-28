import React from "react";
import { Form, FormProps } from "@/src/app/components/form/Form";
import { LabeledTextField } from "@/src/app/components/form/LabeledTextField";
import { LabeledCheckbox } from "@/src/app/components/form/LabeledCheckbox";

import { z } from "zod";
export { FORM_ERROR } from "@/src/app/components/form/Form";

export function TodoForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Enter todo name" />
      <LabeledCheckbox name="isCompleted" label="Is Completed?" />
    </Form>
  );
}
