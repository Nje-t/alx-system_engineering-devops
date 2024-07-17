import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ForumPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="postedBy" source="postedBy" />
      </SimpleForm>
    </Create>
  );
};
