import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STORY_TITLE_FIELD } from "../story/StoryTitle";
import { VOLUNTEER_TITLE_FIELD } from "../volunteer/VolunteerTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
