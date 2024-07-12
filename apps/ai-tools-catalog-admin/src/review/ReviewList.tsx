import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AITOOL_TITLE_FIELD } from "../aiTool/AiToolTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="content" source="content" />
        <TextField label="rating" source="rating" />
        <ReferenceField label="AITool" source="aitool.id" reference="AiTool">
          <TextField source={AITOOL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
