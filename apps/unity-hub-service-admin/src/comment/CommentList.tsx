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
import { STORY_TITLE_FIELD } from "../story/StoryTitle";
import { VOLUNTEER_TITLE_FIELD } from "../volunteer/VolunteerTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <ReferenceField label="Story" source="story.id" reference="Story">
          <TextField source={STORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Volunteer"
          source="volunteer.id"
          reference="Volunteer"
        >
          <TextField source={VOLUNTEER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
