import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AiToolTitle } from "../aiTool/AiToolTitle";
import { CommentTitle } from "../comment/CommentTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <NumberInput label="rating" source="rating" />
        <ReferenceInput source="aiTool.id" reference="AiTool" label="AITool">
          <SelectInput optionText={AiToolTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
